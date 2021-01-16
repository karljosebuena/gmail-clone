import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core';
import { Apps, Menu, ArrowDropDown, Notifications, Search } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src="https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png" alt="Gmail" />
      </div>

      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown />
      </div>

      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
