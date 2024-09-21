import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResumeInfo } from '@/store/resumeSlice'; // Adjust the path if necessary
import Layout from '@/CommonComponents/Layout';
import ResumePreview from './components/ResumePreview';
import FormSection from './components/FormSection';
import dummy from '@/data/dummy';

export default function Page() {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => state.resume.info); // Access resume info from Redux

  useEffect(() => {
    // Dispatch action to set resume info if needed
    dispatch(setResumeInfo(dummy)); // You can also fetch new data here
  }, [dispatch]);

  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
        {/* Form Section */}
        <FormSection />
        {/* Preview Section */}
        <ResumePreview />
      </div>
    </Layout>
  );
}
