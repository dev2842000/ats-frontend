import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '@/CommonComponents/Layout';
import Image from 'next/image';

const Home = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1000, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false, // Hides the arrows
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-black">
        <section>
          <div className="relative w-full h-screen">
          <div>
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Banner 2"
                  quality={90}
                  style={{
                    width: '100%',
                    height: 745,
                  }}
                  width={500}
                  height={600}
                  priority
                />
              </div>
          </div>
        </section>

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
      </div>
    </Layout>
  );
};

export default Home;
