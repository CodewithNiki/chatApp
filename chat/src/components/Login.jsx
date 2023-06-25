import { FaUser } from "react-icons/fa";
import { auth } from "../lib/firebase";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const REDIRECT_PAGE = "/welcome";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: REDIRECT_PAGE,
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ]
}

const LoginPage = () => {
  const { authUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!loading && authUser){
      navigate("/welcome")
    }
  }, [authUser, loading, navigate])

  return (
    (loading || (!loading && !!authUser)) ? <div className=" bg-slate-900 text-white w-full h-screen flex items-center justify-center ">Loading...</div> 
    :
    <div className=" bg-gray-800 w-full h-screen flex items-center justify-center ">
      <div className=" border-4 border-cyan-700 text-white py-8 px-6 rounded">
        <FaUser className=" text-6xl text-slate-50 rounded-full mx-auto bg-slate-200" />
        <p className=" text-xl text-center mt-2 font-bold text-cyan-500">Valdymas Chat</p>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}></StyledFirebaseAuth>
      </div>
    </div>
  )
}

export default LoginPage;