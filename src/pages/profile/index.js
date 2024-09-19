import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const userId = sessionStorage.getItem('userId'); // Assuming you stored userId

    if (token) {
      console.log('User ID:', userId);
      fetchCurrentUser(token,userId);
    } else {
      window.location.href = '/sign-in';
    }
  }, []);

  const fetchCurrentUser = async (token, userId) => {
    try {
      const response = await fetch('http://localhost:8000/getUser', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }), // Ensure userId is included here
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
  
      const data = await response.json();
      setUser(data); // Assuming setUser is your state setter for user
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };
  

  if (loading) {
    return <p>Loading user details...</p>;
  }
  
  return (
    <div>
      <h2>Users List:</h2>
    </div>
  );
};

export default Profile;
