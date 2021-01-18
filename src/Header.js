import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core';
import {
  Apps,
  Menu,
  ArrowDropDown,
  Notifications,
  Search
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut()
      .then(() => dispatch(logout()))
      .catch(error => console.log(error.message))
  };

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
        <Avatar
          onClick={signOut}
          src={user?.photoUrl}
        />
      </div>
    </div>
  )
}

export default Header
