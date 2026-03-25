import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const email= useRef(null);
    const password= useRef(null);
    const displayName=useRef(null);
    const toggleSignInform=()=>{
        setIsSignInForm(!isSignInForm);
    }
   const handleButtonClick = () => {
  try {
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    //Create SignUp user Account
    if(!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   updateProfile(user, {
  displayName: displayName.current.value, photoURL: "data:image/jpeg;base64,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"
}).then(() => {
  navigate("/browse");
}).catch((error) => {
  setErrorMessage(error);
});
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)
  });
    }else{
       // Create Signed in user Account
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {   
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
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