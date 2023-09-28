import React, { useState } from 'react';
import { app } from '../../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
const Login = () => {

   const auth = getAuth(app)
   const provider =  new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()
   const [log, setLog] = useState(null)

    const handleGoogle = () => {
        
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        setLog(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
       
    }
   
    const handleSignOut = () => {
        signOut(auth)
        .then((result) => {
            setLog(null)
        })
        .catch(error => console.log(error.message))
    }


    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user
            setLog(user)
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className=' flex flex-col gap-2 h-screen justify-center items-center'>
    
    {log && <div>
            <h2>user Name : {log?.displayName}</h2>
            <h2>user Email : {log?.email}</h2>
            <img src={log.photoURL} alt="" />
            </div> }
            
            


            {log ? <button onClick={handleSignOut} className=' btn bg-blue-500 text-black'>Sign Out </button> : <> 
            <button onClick={handleGoogle} className=' btn bg-yellow-500 text-black'>Google Sign In </button> 
            <button onClick={handleGithub} className=' btn bg-purple-500 text-black'>GitHub Sign In </button> 
            </>
            }
            
            
            
            
            
        </div>
    );
};

export default Login;