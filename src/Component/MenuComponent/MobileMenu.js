import React from 'react';
import { X } from 'lucide-react';
import CustomLink from '../CommonComponents/CustomLink';
import Button from '../CommonComponents/Button';
import { useRouter } from 'next/router';

const MobileMenu = ({ isOpen, toggleMenu, token, userId, signOut }) => {
  const router = useRouter();

  return (
    <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Align the X icon to the top right */}
      <div className="absolute top-4 right-5 top-6">
        <X className="text-white h-8 w-8 cursor-pointer" onClick={toggleMenu} />
      </div>

      <CustomLink
        href="/"
        variant="primary" 
        size="large"
      >
        Home
      </CustomLink>
      

      {token && userId ? (
        <>
          <CustomLink
            prefetch={false}
            href="/dashboard"
            variant="primary" 
            size="large"
          >
            Dashboard
          </CustomLink>
          <CustomLink
            prefetch={false}
            href="/profile"
            variant="primary" 
            size="large"
          >
            Profile
          </CustomLink>
          <Button
            onClick={signOut}
            style="bg-red-500 hover:bg-red-700 text-white"
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          onClick={() => router.push("/auth")}
          style="bg-blue-500 hover:bg-blue-700 text-white"
        >
          Get Started
        </Button>
      )}
    </div>
  );
};

export default MobileMenu;
