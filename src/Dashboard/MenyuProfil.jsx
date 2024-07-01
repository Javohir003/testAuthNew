import { useAuth0 } from "@auth0/auth0-react";
import "./Styles/profil.css";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";


function Profile({activeBar, logoutWithRed, setActiveBar}) {
  const { user } = useAuth0();
  const handleItemClick = () => {
    setActiveBar(false); // Item bosilganda activeBar ni false qilamiz
  };

  return (
    <>
      <div className={`profile-wrapper ${activeBar ? "active" : ''}`}>
        <p className="title-parent">Your Repository</p>
        <p className="title-parent">Your Change Account</p>
        <div className="settings">
          <p className="title">Settings</p>
          <Link to="/profile" 
          
          className="user-line" onClick={handleItemClick}>
            <FaUserEdit fontSize={"30px"}/>
            <p>{user.given_name}</p>
          </Link>
          <article className="user-line-del" style={{marginBottom: "20px"}} onClick={()=> logoutWithRed()}>
            <IoLogOut fontSize={'30px'} />
            <p>Log out</p>
          </article>
          <p className="line"></p>
          <article className="user-line-out">
            <MdDeleteOutline fontSize={"30px"}/>
            <p>Delete account</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Profile;
