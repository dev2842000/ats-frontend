import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setAuthData } from "@/store/authSlice"; // Adjust the path if needed
import LOGO from "../../../public/logo.svg";
import Button from "./Button";
import CustomLink from "../CommonComponents/CustomLink";
import { AlignJustify } from "lucide-react";
import MobileMenu from "../MenuComponent/MobileMenu"; // Import the new MobileMenu component

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Get the authentication state from Redux store
  const { token, userId } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken && storedUserId) {
      dispatch(setAuthData({ token: storedToken, userId: storedUserId }));
    }
  }, [dispatch]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const signOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authToken");
    window.location.href = "/auth"; // Redirect to auth page after sign out
  };

  return (
    <header className="p-3 px-5 flex justify-between items-center shadow-md bg-white">
      <Image
        className="cursor-pointer mr-4"
        onClick={() => router.push("/")}
        src={LOGO}
        width={80}
        height={80}
        alt="LOGO"
        priority={true}
        loading="eager"
        sizes="(max-width: 640px) 40px, 50px"
      />

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex items-center space-x-6">
        <CustomLink
          href="/"
          style={`h-30 ${router.pathname === "/" ? "font-bold underline" : ""}`}
        >
          Home
        </CustomLink>
        {token && userId ? (
          <>
            <CustomLink
              prefetch={false}
              href="/dashboard"
              style={`h-30 ${router.pathname === "/dashboard" ? "font-bold underline" : ""}`}
            >
              Dashboard
            </CustomLink>
            <CustomLink
              prefetch={false}
              href="/profile"
              style={`h-30 ${router.pathname === "/profile" ? "font-bold underline" : ""}`}
            >
              Profile
            </CustomLink>
            <Button
              onClick={signOut}
              style="h-30 bg-red-500 hover:bg-red-700 text-white"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            onClick={() => router.push("/auth")}
            style="h-30 bg-blue-500 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        )}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex flex-col items-center space-y-3 mt-3 relative">
        {!isOpen ? (
          <AlignJustify onClick={toggleMenu} className="h-8 w-8 mx-auto" />
        ) : (
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} token={token} userId={userId} signOut={signOut} />
        )}
      </nav>
    </header>
  );
};

export default Header;
