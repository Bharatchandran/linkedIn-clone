import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>

        <div className="header__left">
        <h1>Linkedin</h1>
          <img
           src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Flinkedin_174857&psig=AOvVaw2n6u3qZyb5TqAY4RyCA7Ly&ust=1695823432883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJDnqdy4yIEDFQAAAAAdAAAAABAE" 
           alt="" 
           />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>

        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon}  title="Jobs" />
          <HeaderOption Icon={ChatIcon}  title="Messaging" />
          <HeaderOption Icon={NotificationsIcon}  title="Notification" />
          <HeaderOption avatar="https: //compassionate-leakey-e9b16b.
netlify.app/images/IG_Sonny.jpeg"   title="me" />

        </div>
    </div>
  )
}

export default Header