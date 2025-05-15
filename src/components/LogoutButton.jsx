// LogoutButton.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <button 
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
