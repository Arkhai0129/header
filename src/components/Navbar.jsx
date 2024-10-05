import React from 'react'
import "./style.css"
import Logo from '../picture/Vista_Color.png'
import ContactIcon from '../picture/icon/contact-icon.png'
import FolderIcon from '../picture/icon/folder-icon.png'
import ProfileIcon from '../picture/icon/profile-icon.png'
import SearchIcon from '../picture/icon/search-icon.png'
import ShoppingIcon from '../picture/icon/shopping-icon.png'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="left-container">
            <img src={Logo} alt="logo" className='nav-image' />
        </div>

        <div className="center-container">
            <input type="text" name="text" className='search-bar' placeholder='Search'/>
        </div>

        <div className="right-container">
            <div className="right-elements">
              <img src={ContactIcon} alt="icon" />
              <a href='#'>Help is here 1.866.207.4955</a>
              <p className='contact-number'></p>
            </div>
            <div className="right-elements">
              <img src={FolderIcon} alt="icon" />
              <a href='#'>My Projects</a>
            </div>
            <div className="right-elements">
              <img src={ProfileIcon} alt="icon" />
              <a href='#'>Sign in</a>
            </div>
            <div className="right-elements">
              <img src={ShoppingIcon} alt="icon" />
              <a href='#'>Cart</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar