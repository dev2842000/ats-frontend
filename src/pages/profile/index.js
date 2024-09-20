import { useEffect, useState, Suspense } from "react";
import { useRouter } from 'next/navigation';
import Layout from "@/CommonComponents/Layout";
import Loader from "@/CommonComponents/Loader";

// Fetch user data and return a promise
const fetchUserData = async (token, userId) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getUser`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  const data = await response.json();
  return data;
};

const ProfileContent = ({ token, userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserData(token, userId);
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getUser();
  }, [token, userId]);

  if (error) {
    throw new Error(error);
  }

  if (user) {


    return (
      <div className="flex items-center justify-center min-h-screen bg-black-100 text-black">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">User Profile</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Name:</h3>
            <p>{user.fullName}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Email:</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    );
  }
};

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

  useEffect(() => {
    if (!token) {
      router.push('/auth');
    } else {
      setLoading(false);
    }
  }, [router, token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <ProfileContent token={token} userId={userId} />
      </Suspense>
    </Layout>
  );
};

export default Profile;
