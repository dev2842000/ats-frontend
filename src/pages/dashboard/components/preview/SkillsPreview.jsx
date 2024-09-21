import React from 'react'

function SkillsPreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >
        Skills
      </h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      <div className='flex flex-wrap gap-2 justify-center my-4'>
        {resumeInfo?.skills.map((skill, index) => (
          <React.Fragment key={index}>
            <h2 className='text-xs'>{skill.name}</h2>
            {index !== resumeInfo?.skills.length - 1 && (
              <span className='text-xs font-bold'>|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview
