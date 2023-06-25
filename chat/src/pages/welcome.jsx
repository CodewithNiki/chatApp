// import { useState } from "react";
// import { auth } from "../lib/firebase";
import Sidebar from "../components/Sidebar/Sidebar";
import Chats from "../components/Chats/chats";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const { authUser, signOut } = useAuth();
    const navigate = useNavigate();

    if(!authUser){
        navigate("/")
    }

    return (
        (!authUser) ? <div className=" bg-slate-900 text-white w-full h-screen flex items-center justify-center ">Loading...</div> 
        :
        <div className=" bg-slate-500 w-full h-screen flex items-center justify-center ">
            <div className=" flex text-white border rounded-lg w-2/3 h-5/6 overflow-hidden ">
                <Sidebar />
                <Chats />
            </div>
            <div>{authUser?.email}</div>
            <button onClick={signOut}
                className=" text-white">Logout</button>
        </div>

    )
}

export default WelcomePage;