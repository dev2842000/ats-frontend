import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import Button from '@/Component/CommonComponents/Button';
import CustomTextarea from '@/Component/CommonComponents/CustomTextarea';
import { useDispatch, useSelector } from 'react-redux';
import { setResumeInfo } from '@/store/resumeSlice';
import { AIChatSession } from './../../../../../service/AIModal';




function Summery({ enabledNext }) {
    const dispatch = useDispatch();
    const resumeInfo = useSelector((state) => state.resume.info); // Select resume info from Redux store
    const prompt = `Job Title: ${resumeInfo.jobTitle}. Provide a list of experience summaries for three experience levels (Senior, Mid-level, and Fresher) that are ATS-friendly. Each summary should be concise, ideally between 40 to 60 words, and use industry-relevant keywords that align with common job descriptions for the ${resumeInfo.jobTitle}. Each response should be in array format, including 'summary', 'experience_level', and 'keywords' fields in JSON format for each experience level.`;
    
    const [summary, setSummary] = useState(resumeInfo?.summary || ''); // Initialize with Redux state
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { resumeId } = router.query;
    const [aiGeneratedSummaryList, setAiGenerateSummaryList] = useState([]);

    // Prevent infinite loop by checking if summary is different
    useEffect(() => {
        if (summary !== resumeInfo?.summary) {
            dispatch(setResumeInfo({ ...resumeInfo, summary }));
        }
    }, [summary, resumeInfo, dispatch]);

    const GenerateSummaryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle || '');
        console.log(PROMPT);
        
        try {
            const result = await AIChatSession.sendMessage(PROMPT);
            const aiSummaries = JSON.parse(result.response.text());
            setAiGenerateSummaryList(aiSummaries); // Set AI-generated summaries
        } catch (error) {
            console.error("AI Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            data: {
                summary: summary
            }
        };

        try {
            // Simulate API call
            // const resp = await GlobalApi.UpdateResumeDetail(resumeId, data);
            // console.log(resp);
            enabledNext(true); // Proceed to the next step
            toast("Details updated");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add Summary for your job title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summary</label>
                        {!aiGeneratedSummaryList.length?
                        <Button
                            variant="outline"
                            onClick={GenerateSummaryFromAI}
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                        >
                            <Brain className='h-4 w-4' /> Generate from AI
                        </Button>
                        :null
                    }
                    </div>
                    <CustomTextarea
                        className="mt-5"
                        required
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)} // Update summary state
                    />
                    {/* <div className='mt-2 flex justify-end'>
                        <Button type="submit" disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div> */}
                </form>
            </div>

            {/* Display AI-generated summary suggestions */}
            {aiGeneratedSummaryList && (
                <div className='my-5'>
                    <h2 className='font-bold text-lg'>Suggestions</h2>
                    {aiGeneratedSummaryList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSummary(item?.summary)} // Set selected summary
                            className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'
                        >
                            <h2 className='font-bold my-1 text-primary'>
                                Level: {item?.experience_level}
                            </h2>
                            <p>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Summery;
