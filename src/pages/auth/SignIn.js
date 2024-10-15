import { useState } from "react";
import CustomInput from "../../Component/CommonComponents/CustomInput"; // Update the import
import Button from "../../Component/CommonComponents/Button";
import { useRouter } from 'next/router';
import Error from "../../Component/CommonComponents/Error";
import { setToken } from "@/utils/helper";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return false;
    }

    // Regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error response from server
        setError(data.message || "Login failed");
        return;
      }

      setToken(data.token, data.userId);
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <Error message={error} />}

      <CustomInput
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={'bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
      />

      <CustomInput
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={'bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
      />

      <Button style={'w-full bg-blue-500 hover:bg-blue-700 text-white '} type="submit">Sign In</Button>
    </form>
  );
};

export default SignIn;
