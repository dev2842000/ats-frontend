const SignIn = () => {
  const handleSignIn = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
