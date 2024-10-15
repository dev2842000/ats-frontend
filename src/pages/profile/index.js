import { useEffect, useState, Suspense } from "react";
import { useRouter } from 'next/navigation';
import Layout from "@/Component/CommonComponents/Layout";
import Loader from "@/Component/CommonComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from '../../store/authSlice'; // Adjust the path if necessary

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
  const dispatch = useDispatch();
  
  const { token: reduxToken, userId: reduxUserId } = useSelector((state) => state.auth); // Get token and userId from Redux store
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let token = reduxToken;
    let userId = reduxUserId;
    
    if (!reduxToken || !reduxUserId) {
      // If not in Redux, check localStorage
      token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

      // If found in localStorage, dispatch to Redux
      if (token && userId) {
        dispatch(setAuthData({ token, userId }));
      }
    }

    if (!token || !userId) {
      // Redirect to /auth if not authenticated
      router.push('/auth');
    } else {
      // Stop loading if authenticated
      setLoading(false);
    }
  }, [reduxToken, reduxUserId, dispatch, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title={'Profile'} name="profile" content="Create and manage your ATS-friendly resumes.">
      <Suspense fallback={<Loader />}>
        <ProfileContent token={reduxToken} userId={reduxUserId} />
      </Suspense>
    </Layout>
  );
};

export default Profile;
