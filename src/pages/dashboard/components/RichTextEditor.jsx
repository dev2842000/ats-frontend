import { Brain, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
import Button from '@/Component/CommonComponents/Button';
import { useSelector } from 'react-redux';

const PROMPT = 'position title: {positionTitle}, Based on the position title, give me 5-7 bullet points for my experience in the resume (Please do not add experience level and No JSON array). Give me the result in HTML list format with <ul> and <li> tags.'

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    // Format defaultValue to bullet points with <ul> and <li>
    const formatAsBulletPoints = (items) => {
        return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    };

    const [value, setValue] = useState(formatAsBulletPoints(defaultValue));
    const resumeInfo = useSelector((state) => state.resume.info); // Select resume info from Redux store
    const [loading, setLoading] = useState(false);

    const GenerateSummeryFromAI = async () => {
        if (!resumeInfo?.experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }
        setLoading(true);
        const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);

        const result = await AIChatSession.sendMessage(prompt);
        const resp = await result.response.text();
        setValue(resp); // Assuming the AI returns a list with <ul> and <li> tags
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant="outline" size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="flex gap-2 border-primary text-primary">
                    {loading ?
                        <LoaderCircle className='animate-spin' /> :
                        <>
                            <Brain className='h-4 w-4' /> Generate from AI
                        </>
                    }
                </Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e.target.value); // Pass the updated HTML content
                }}>
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
