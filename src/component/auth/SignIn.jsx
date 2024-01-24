import React, { useState } from 'react';
import { signInWithEmailAndPassword    }  from 'firebase/auth';
import { Link , useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';



const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/auth-detail');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in">
      <h1>Login to your app</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
 
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <Link to={`/`}>Sign up</Link>
      </p>
      <p>
        <Link to={`/google-sign`}>Login with Google</Link>
      </p>
    </div>
  );
};

export default SignIn;
