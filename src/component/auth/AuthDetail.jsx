import React, { useEffect, useState } from 'react'
import { signOut    , onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../firebase'
import {useNavigate} from 'react-router-dom'

const AuthDetail = () => {

    const navigate = useNavigate();
    const [authUser , setAuthUser] = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setAuthUser(user)
            } else {
            setAuthUser(null)
            }
          });
    },[])

    const userSignOut = ()=>{
        signOut((auth)).then(()=>{
            console.log('Signed out success')
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
              {
                authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>SignOut</button> </>: <p>Signed Out</p>
              }
    </div>
  )
}

export default AuthDetail
