import { useState } from "react";
import Link from "next/link";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Layout from "@/CommonComponents/Layout";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {isSignIn ? <SignIn /> : <SignUp />}

          <p className="text-center text-gray-500 my-4">OR</p>

          <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block text-center" href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`} passHref>
            Sign in with Google
          </Link>

          <p className="text-center mt-4 text-gray-700">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-blue-500 ml-2 underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
