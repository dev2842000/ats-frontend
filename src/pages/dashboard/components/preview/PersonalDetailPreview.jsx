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
                {resumeInfo?.firstName} {resumeInfo?.lastName}
            </h2>

            <div className='flex justify-center gap-2 my-2'>
                {resumeInfo?.links?.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link
                                href={item.link}
                                className="text-xs flex items-center underline hover:underline"
                                style={{ color: resumeInfo?.themeColor }}
                            >
                                {item.name}
                            </Link>
                            {index !== resumeInfo?.links.length - 1 && (
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
