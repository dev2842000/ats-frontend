import React, { useState } from 'react';
import { PlusSquare } from 'lucide-react';
import CustomInput from '@/CommonComponents/CustomInput';
import Button from '@/CommonComponents/Button';
import { useRouter } from 'next/router';

const AddResume = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [resumeTitle, setResumeTitle] = useState(null)
    const router=useRouter()

    const handlerReseumeTitle = (title) => {
        setResumeTitle(null)
        setDialogOpen(false)
        router.push(`/dashboard/${title}`)
    }

    return (
        <div>
            <div
                className='p-14 py-24 border items-center flex justify-center bg-gray-300 rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer'
                onClick={() => setDialogOpen(true)}
            >
                <PlusSquare size={48} className="text-gray-500" />
            </div>


            {dialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 shadow-lg w-96">
                        <h2 className="text-lg font-bold">Create New Resume</h2>

                        <p className='opacity-50'>Add a title for your new resume!</p>

                        <CustomInput
                            style={'mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'}
                            placeholder={'Ex.Amazon SDE resume'}
                            value={!resumeTitle ? '' : resumeTitle}
                            onChange={(e) => setResumeTitle(e.target.value)}
                        />

                        <div className="mt-4 flex justify-end space-x-2">
                            <Button
                                style={'text-black px-4 py-2 rounded hover:bg-gray-300'}
                                onClick={() => setDialogOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button disabled={!resumeTitle} style={'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'}
                                onClick={() => handlerReseumeTitle(resumeTitle)}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddResume;
