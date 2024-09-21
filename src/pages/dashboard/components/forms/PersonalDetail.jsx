'use client'
import { LoaderCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import CustomInput from '@/CommonComponents/CustomInput';
import Button from '@/CommonComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setResumeInfo } from '@/store/resumeSlice';

function PersonalDetail({ enabledNext }) {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resume.info);

  const [formData, setFormData] = useState(resumeInfo || {});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(setResumeInfo({
      ...resumeInfo,
      [name]: value,
    }));
  };

  // Handle checkbox and link input change
  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...resumeInfo.links];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value,
    };

    dispatch(setResumeInfo({
      ...resumeInfo,
      links: updatedLinks,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    // You can save the updated formData to the backend if needed
    setLoading(false);
    toast("Details updated");
    
  };
  
  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <CustomInput
              name="fullName"
              label="Full Name"
              defaultValue={resumeInfo?.fullName ? resumeInfo.fullName : 'Jon Doe' }
              required
              onChange={handleInputChange}
            />
          </div>
          <div className='col-span-2'>
            <CustomInput
              name="jobTitle"
              label="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle?resumeInfo?.jobTitle:'Software Developer'}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <CustomInput
              name="phone"
              label="Phone"
              required
              defaultValue={resumeInfo?.phone?resumeInfo?.phone:'+91-9999999999'}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <CustomInput
              name="email"
              label="Email"
              required
              defaultValue={resumeInfo?.email?resumeInfo?.email:'example@mail.com'}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-5">
          <h3 className='font-bold text-lg'>Social Links</h3>
          {resumeInfo?.links?.map((link, index) => (
            <div key={index} className='flex items-center mt-3'>
              <input
                type="checkbox"
                checked={link.isChecked}
                onChange={(e) =>
                  handleLinkChange(index, 'isChecked', e.target.checked)
                }
                className='mr-2 cursor-pointer'
              />
              <CustomInput
                label={link.name}
                id={link.name}
                name={`link-${index}`}
                value={link.link ? link.link : '' }
                placeholder='Enter Url'
                style='mr-2 w-full'
                onChange={(e) => handleLinkChange(index, 'link', e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className='mt-3 flex justify-end'>
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
