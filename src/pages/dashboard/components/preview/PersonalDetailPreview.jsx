import Link from 'next/link';
import React from 'react';

function PersonalDetailPreview({ resumeInfo }) {
    return (
        <div>
            <h2 className='font-bold text-xl text-center'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {resumeInfo?.fullName}
            </h2>
            <h2 className='text-l text-center'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >
                {resumeInfo?.jobTitle}
            </h2>

            <div className='flex justify-center gap-2 my-2'>
                {resumeInfo?.links
                    ?.filter((item) => item.isChecked) // Filter links that are checked
                    .map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Link
                                    href={item.link}
                                    className="text-xs flex items-center underline hover:underline"
                                    style={{ color: resumeInfo?.themeColor }}
                                >
                                    {item.name}
                                </Link>
                                {index !== resumeInfo?.links.filter((link) => link.isChecked).length - 1 && ( // Ensure the separator only shows between visible links
                                    <span className='text-xs' style={{ color: resumeInfo?.themeColor }}>
                                        |
                                    </span>
                                )}
                            </React.Fragment>
                        );
                    })}
            </div>




            <div className='flex justify-between'>
                <h2 className='font-normal text-xs'
                    style={{
                        color: resumeInfo?.themeColor
                    }}>{resumeInfo?.phone}
                </h2>
                <h2 className='font-normal text-xs'
                    style={{
                        color: resumeInfo?.themeColor
                    }}>{resumeInfo?.email}
                </h2>
            </div>

            <hr className='border-[1.5px] my-2'
                style={{
                    borderColor: resumeInfo?.themeColor
                }}
            />
        </div>
    );
}

export default PersonalDetailPreview;
