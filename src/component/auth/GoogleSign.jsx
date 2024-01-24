import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";

const GoogleSign = () => {
   const auth = getAuth(); // You can directly getAuth() without passing the app instance
   const navigate = useNavigate();
   const handleClick = () => {
       signInWithPopup(auth, new GoogleAuthProvider())
       .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.
         console.log(result);
         // Access the credential directly from the result
         const credential = GoogleAuthProvider.credentialFromResult(result);
         console.log(credential);
         navigate('/auth-detail')

         // You can also access the user information
         const user = result.user;
         console.log(user);
       })
       .catch((error) => {
         console.error(error);
       });
   }

  return (
    <div>
       <button onClick={handleClick}>Sign in with Google</button>
    </div>
  )
}

export default GoogleSign;
