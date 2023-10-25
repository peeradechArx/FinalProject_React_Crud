import React, { useEffect, useState } from 'react';
import './profile.css'; 

import { Link } from 'react-router-dom';
function Profile() {
  const jwt = localStorage.getItem('jwt');
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [user, setUser] = useState({ fname: '...', username: '...' });

  useEffect(() => {
    function loadUser() {
      const http = new XMLHttpRequest();
      http.open('GET', 'https://www.melivecode.com/api/auth/user');
      http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      http.setRequestHeader('Authorization', `Bearer ${jwt}`);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          try {
            const objects = JSON.parse(this.responseText);
            if (objects.status === 'ok') {
              const loadedUser = objects.user;
              setUser(loadedUser);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        }
      };
    }
    
    if (jwt == null) {
      setIsLoggedOut(true);
    } else {
      loadUser();
    }
  }, [jwt]);
  
  function logout() {
    localStorage.removeItem('jwt');
    setIsLoggedOut(true);
    window.location.href = './login'
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand">
            Crud Create by peeradech phola 643450082-4
          </a>
          <li>
        <Link to="/login" className="dropdown-item" onClick={logout}>
            Login
        </Link>
        </li>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="fname">
                  {isLoggedOut ? '...' : user.fname}
                </a>
                <ul className="dropdown-menu" aria ="navbarDropdown">
                  {isLoggedOut ? (
                    null
                  ) : (
                    <li>
                      <Link to="/login" className="dropdown-item" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      <div className="container-fluid p-3">
        <div className="card">
          {isLoggedOut ? (
            
            null
          ) : (
            <img className="p-2" src={user.avatar} alt="User Avatar" id="avatar" width="200" />
          )}
          <div className="card-body">
            {isLoggedOut ? (
              null
            ) : (
              <p className="card-text" id="username">
                {user.username}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;