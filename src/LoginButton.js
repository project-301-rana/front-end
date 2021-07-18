import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();    

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>   // When the user id not authenticated it will return this button
  );
}

export default LoginButton;