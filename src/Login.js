import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({user}) => {
      dispatch(login({
        displyName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }));
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg"
          alt="Login"
        />
        <Button
          onClick={signIn}
          variant="contained"
          color="primary"
        >Login</Button>
      </div>
    </div>
  )
}

export default Login
