import React from "react";
import Layout from "@/Component/CommonComponents/Layout";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import Card from "@/Component/CommonComponents/HomeCards";

const Home = () => {
  const cardData = [
    {
      icon: <AtomIcon className="h-8 w-8 mx-auto" />,
      title: "Input Your Job Details",
      discription:
        "Start by adding your job title, skills, and work experience. We’ll help you optimize these for ATS systems.",
    },
    {
      icon: <Edit className="h-8 w-8 mx-auto" />,
      title: "Edit and Customize",
      discription:
        "Customize your resume format and ensure it matches the job description with the right keywords.",
    },
    {
      icon: <Share2 className="h-8 w-8 mx-auto" />,
      title: "Download and Apply",
      discription:
        "Once your resume is optimized, download it and apply to jobs with confidence, knowing it’s ATS-friendly.",
    },
  ];
 
  return (
    <Layout
      title={"ATS-Resume"}
      name="home"
      content="Create and manage your ATS-friendly resumes."
    >
      <div className="min-h-screen bg-gray-100 text-black">
        {/* Top section with background color */}
        <section className="w-full h-screen bg-blue-600 text-white flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4">
              Build Your ATS-Friendly Resume
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Our platform helps you create a resume that passes Applicant
              Tracking Systems (ATS) by using optimized keywords, proper
              formatting, and relevant job titles. Ensure your resume is parsed
              correctly by modern recruitment tools and stand out to potential
              employers.
            </p>
          </div>
        </section>

        {/* How it Works section */}
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl md:text-4xl">How it Works?</h2>
          <h2 className="text-md text-gray-500 mt-2">
            Create an ATS-friendly resume in 3 easy steps
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((item) => {
              return (
                <Card
                  key={item.title}
                  dynamicIcon={item.icon}
                  title={item.title}
                  description={item.discription}
                />
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/auth"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
