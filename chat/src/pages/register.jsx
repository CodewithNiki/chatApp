import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async () => {
    try {
      setLoading(true)
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      setLoading(false);
      user.user && navigate("/welcome");
    }
    catch (error) {
      console.log(error.message);
      alert(error.message)
      setLoading(false);
    }
    // setRegisterEmail("");
    // setRegisterPassword("");
  }

  const handleEmailChange = (e) => {
    setRegisterEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setRegisterPassword(e.target.value)
  }

  return (
    <div className=" bg-gray-800 w-full h-screen flex items-center justify-center "> 
      <div className=" border-4 border-cyan-700 text-white py-8 px-6 rounded">
        <FaUser className=" text-6xl text-slate-50 rounded-full mx-auto bg-slate-200" />
        <p className=" text-xl text-center font-bold mt-2">Create a user</p>
        <div className=" flex items-center gap-4 my-4">
          <FaEnvelope className=" text-lg" />
          <input type="text" placeholder="Email ID" className=" bg-transparent border-2 outline-none py-2 px-4" value={registerEmail} onChange={handleEmailChange} />
        </div>
        <div className="flex items-center gap-4">
          <FaLock />
          <input type="password" placeholder="Password" className=" bg-transparent border-2 outline-none py-2 px-4 mb-4" value={registerPassword} onChange={handlePasswordChange} />
        </div>
        <div>
          <input type="file" id="file" className=" hidden"/>
          <label htmlFor="file" className=" flex items-center gap-4 mb-4 text-cyan-500 cursor-pointer">
            <FaUser /><span>Add profile picture</span>
          </label>
        </div>
        <button className=" border-2 border-cyan-500 py-2 w-full cursor-pointer hover:bg-cyan-500 hover:text-gray-800" onClick={register}>{loading ? "Loading..." : "Register"}</button>
      </div>
    </div>
  )
}

export default RegisterPage