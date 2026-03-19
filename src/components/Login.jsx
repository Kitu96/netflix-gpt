import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login(){
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const email= useRef(null);
    const password= useRef(null);
    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInForm);
    }
   const handleButtonClick = () => {
  try {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  } catch (err) {
    setErrorMessage(err.message);
  }
};

return(
   <div>
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
    alt="bg-logo"/>
</div>
 <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg" onSubmit={(e)=>e.preventDefault()}>
    <h1 className="text-3xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm && <input type="text" placeholder="full Name" className="py-2 my-2 w-full bg-gray-500"/>}
    <input type="text" ref={email} placeholder="Email Id" className="py-2 my-2 w-full bg-gray-500"/>
    <input type="text" ref={password} placeholder="password" className="py-2 my-2 w-full bg-gray-500"/>
    <p className="text-red-200">{errorMessage}</p>
    <button className="p-4 bg-red-700 rounded-lg w-full" onClick={handleButtonClick}>{isSignInForm? "Sign In" :"Sign Up"}</button>
    <p className="py-2" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix?Sign Up Now" : "Already Signin.Please login"}</p>
</form>
</div>)
}