import { useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Protected from "../components/Protected";


const WelcomePage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    });

    const logOut = async () => {
        await signOut(auth);
        navigate("/")
    }

    return (
        <Protected user={user}>
            <div>
                <div className=" text-white text-lg">Welcome {user?.email}</div>
                <button onClick={logOut}
                    className=" text-white border-2 border-cyan-400 py-2 w-1/2 cursor-pointer hover:bg-cyan-400 hover:text-gray-800">Sign Out</button>
            </div>
        </Protected>
    )
}

export default WelcomePage;