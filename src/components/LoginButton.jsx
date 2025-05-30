// LoginButton.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated && (
    <button 
      onClick={() => loginWithRedirect()} 
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Log In
    </button>
  );
};

export default LoginButton;
