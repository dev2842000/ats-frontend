import { LoaderCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Replacing useParams with useRouter
// import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import CustomInput from '@/CommonComponents/CustomInput';
import Button from '@/CommonComponents/Button';
import { useSelector } from 'react-redux';

function PersonalDetail({ enabledNext }) {
  const router = useRouter(); // Using useRouter hook
  const { resumeId } = router.query; // Extract resumeId from the URL

  const resumeInfo = useSelector((state) => state.resume.info);

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("---", resumeInfo);
  }, [resumeInfo]);

  const handleInputChange = (e) => {
    enabledNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };

    // GlobalApi.UpdateResumeDetail(resumeId, data).then(
    //   (resp) => {
    //     console.log(resp);
    //     enabledNext(true);
    //     setLoading(false);
    //     toast("Details updated");
    //   },
    //   (error) => {
    //     setLoading(false);
    //   }
    // );
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className='grid grid-cols-2 mt-5 gap-3'>
          <div>
            <label className='text-sm'>First Name</label>
            <CustomInput
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-sm'>Last Name</label>
            <CustomInput
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Job Title</label>
            <CustomInput
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className='col-span-2'>
            <label className='text-sm'>Address</label>
            <CustomInput
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-sm'>Phone</label>
            <CustomInput
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className='text-sm'>Email</label>
            <CustomInput
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
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
