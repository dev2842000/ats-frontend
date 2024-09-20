const setToken=(token,userId)=>{
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
}

const signUpValidateForm = (firstName ,lastName ,email ,phone ,password) => {
    if (!firstName || !lastName || !email || !phone || !password) {
      return "All fields are required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };
export {
    signUpValidateForm,
    setToken
}