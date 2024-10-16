import Layout from '@/Component/CommonComponents/Layout';
import ResumePreview from './components/ResumePreview';
import FormSection from './components/FormSection';
export default function Page() {

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
