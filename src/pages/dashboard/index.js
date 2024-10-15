import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from "@/Component/CommonComponents/Layout";
import AddReasume from './components/AddReasume';
import Loader from '@/Component/CommonComponents/Loader'; // Assuming you have a Loader component

const Dashboard = () => {
  const router = useRouter();
  const { token, userId } = useSelector((state) => state.auth); // Get auth data from Redux
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    if (!token || !userId) {
      // If not authenticated, redirect to the /auth page
      router.push('/auth');
    } else {
      // Once authenticated, stop the loading state
      setLoading(false);
    }
  }, [token, userId, router]);

  if (loading) {
    // Show a loader while checking authentication
    return <Loader />;
  }

  return (
    <Layout title={'Resume Dashboard'} name="description" content="Create and manage your ATS-friendly resumes.">
      <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'>My Resume</h2>
        <p>Start creating your ATS-friendly resume</p>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 h-[280px]'>
          <AddReasume />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
