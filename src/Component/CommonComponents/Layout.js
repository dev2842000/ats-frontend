import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children,title,content }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Head>
        <title>{title}</title>
        <meta name={name} content={content} />

      </Head>
      <Header />
      
      {/* Main Content (children) */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;