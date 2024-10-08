import React from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import { useSelector } from 'react-redux'


const ResumePreview = () => {
    const resumeInfo = useSelector((state) => state.resume.info);
    
    return (
        <>
            <div className='shadow-lg h-full p-4 border-t-[2px]'
                style={{
                    borderColor: resumeInfo?.themeColor
                }}>
                {/* Personal Detail  */}
                <PersonalDetailPreview resumeInfo={resumeInfo} />
                {/* Summery  */}
                <SummeryPreview resumeInfo={resumeInfo} />
                {/* Professional Experience  */}
                {resumeInfo?.experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
                {/* Educational  */}
                {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
                {/* Skilss  */}
                {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
            </div></>
    )
}

export default ResumePreview