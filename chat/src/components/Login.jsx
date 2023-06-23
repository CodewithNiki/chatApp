import { signInWithEmailAndPassword } from "firebase/auth";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try{
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      setLoading(false);
      user.user && navigate("/welcome");
    }
    catch(error){
      console.log(error.message);
      alert(error.message);
      setLoading(false)
    }
  }

  const handleEmailChange = (e) =>{
    setLoginEmail(e.target.value)
}

const handlePasswordChange = (e) =>{
    setLoginPassword(e.target.value)
}

  return (
    <div className=" border-4 border-cyan-600 text-white py-8 px-6 rounded">
      <FaUser className=" text-6xl text-slate-50 rounded-full mx-auto bg-slate-200" />
      <p className=" text-lg text-center mt-2">Welcome Back</p>
      <div className=" flex items-center gap-4 my-4">
        <FaEnvelope className=" text-lg" />
        <input type="text" placeholder="Email ID" className=" bg-transparent border-2 outline-none py-2 px-4" value={loginEmail} onChange={handleEmailChange} />
      </div>
      <div className="flex items-center gap-4">
        <FaLock />
        <input type="password" placeholder="Password" className=" bg-transparent border-2 outline-none py-2 px-4" value={loginPassword} onChange={handlePasswordChange} />
      </div>
      <div className=" text-cyan-400 text-right my-4">
        <a href={`/register`} className=" cursor-pointer">Register me</a>
      </div>
      <button onClick={login}
      className=" border-2 border-cyan-400 py-2 w-full cursor-pointer hover:bg-cyan-400 hover:text-gray-800">{loading ? "Loading..." : "Login"}</button>
    </div>
  )
}

export default LoginPage;