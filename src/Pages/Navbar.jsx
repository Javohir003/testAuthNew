import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";
import Profile from "../Dashboard/MenyuProfil";

function Navbar() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
    const [activeBar, setActiveBar] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handleUserClick = () => {
    setActiveBar(!activeBar)
  }

  console.log(isAuthenticated);

  const logoutWithRed = () => {
    logout({
      returnTo: window.location.origin,
    });
    setActiveBar(false)
  };

  return (
    <>
      <header>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="home">Home</Link>
            </li>
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
            {isAuthenticated && (
              <div className="user-wrapper">
                <img src={user.picture} alt={user.given_name} onClick={handleUserClick} />
                {/* <h2>{user.given_name}</h2> */}
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
                <Profile activeBar={activeBar} logoutWithRed={logoutWithRed} setActiveBar={setActiveBar}/>

              </div>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Navbar;
