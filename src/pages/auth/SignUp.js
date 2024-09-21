import { useState } from "react";
import { useRouter } from "next/router";
import { setToken, signUpValidateForm } from "@/utils/helper";
import Error from "@/CommonComponents/Error";
import CustomInput from "@/CommonComponents/CustomInput";

const SignUp = () => {
  const router = useRouter();

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = signUpValidateForm(fullName, email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token, data.userId);
        router.push('/profile');
      } else {
        setError(data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Server error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      {error && <Error message={error} />}

      <CustomInput
        label="Full Name"
        id="FullName"
        type="text"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
        required
        style={'bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
      />

      <CustomInput
        label="Your email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={'bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
      />

      <CustomInput
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={'bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
      />

    </form>
  );
};

export default SignUp;
