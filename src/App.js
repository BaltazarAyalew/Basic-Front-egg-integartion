
import './App.css';
import {useEffect} from 'react'
import "./counter";

import { ContextHolder } from '@frontegg/rest-api';
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";
import UserCard from './components/userCard';

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user
  const handleClick = () => {
    AdminPortal.show()
  }

  return (
    <div >
      {isAuthenticated ? (
       <div>
        <div className="App">
         <UserCard
          user={user}
          logout={logout}
          handleClick={handleClick}
        />
       </div>
       <div className='wrapper'>
          Home
       </div>
       </div>
      ): 
      (
        <div>
          <h1>Need to login</h1>
        </div>
      ) }
    </div>
  );
}

export default App;