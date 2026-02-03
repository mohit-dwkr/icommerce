import { useUser, SignIn } from '@clerk/clerk-react';
import React from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, isLoaded } = useUser();


  if (!isLoaded) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        Loading authentication status...
      </div>
    );
  }


  if (user) {
    return children;
  }

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh', 
        padding: '20px'
    }}>
      <SignIn afterSignInUrl="/cart" />
    </div>
  );
};

export default ProtectedRoute;