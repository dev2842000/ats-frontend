import React, { useEffect, useState } from 'react';
import Layout from '@/CommonComponents/Layout';
import Image from 'next/image';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the value for your mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-black">
        <section>
          <div className="relative w-full h-screen">
            <div>
              {!isMobile ? (
                <Image
                  src="https://media.istockphoto.com/id/1280385511/photo/colorful-background.jpg?s=1024x1024&w=is&k=20&c=vd0BzayI498v8pOGlhzbvTiNpNf7HF5dClK4Qvy4Jac="
                  alt="Desktop Banner"
                  quality={90}
                  width={500}
                  height={745}
                  objectFit="cover"
                  priority={true}
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mobile Banner"
                  quality={90}
                  width={500}
                  height={900}
                  objectFit="cover"
                  priority={true}
                  style={{
                    width: '100%',
                  }}
                />
              )}
            </div>
          </div>
        </section>
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How it Works?</h2>
          <h2 className="text-md text-gray-500">Give mock interview in just 3 simpler easy steps</h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <AtomIcon className='h-8 w-8' />
              <h2 className="mt-4 text-xl font-bold text-black">Write prompt for your form</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </div>

            <div
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <Edit className='h-8 w-8' />
              <h2 className="mt-4 text-xl font-bold text-black">Edit Your form</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </div>

            <div
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <Share2 className='h-8 w-8' />
              <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/auth"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
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
