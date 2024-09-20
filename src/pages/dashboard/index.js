import React from 'react'
import Layout from "@/CommonComponents/Layout";
import AddReasume from '@/DashbordComponents/AddReasume';

const Dashboard = () => {
  return (
    <Layout>
        <div  className='p-10 md:px-20 lg:px-32'>
          <h2 className='font-bold test-3xl'>My Resume</h2>
          <p>Startcreating your ATS reasume</p>

          <div className='grid grid-cols-2 md:grid-cols-3 
          lg:grid-cols-5 mt-10 h-[280px'>
            <AddReasume/>
          </div>
        </div>
        <section className="mt-16 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose ATS-Resume?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Optimized for ATS</h3>
                <p>Create resumes that pass through Applicant Tracking Systems easily.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">User-Friendly Interface</h3>
                <p>Simple and intuitive design to create a resume in minutes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Customizable Templates</h3>
                <p>Pick from a wide range of templates suited for various job roles.</p>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Dashboard