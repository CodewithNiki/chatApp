import { FaUser } from "react-icons/fa"
const Navbar = () => {
    return (
        <div className=" flex gap-6 items-center bg-gray-900 py-3 px-2">
            <div>
                <h3>Valdymas Chat</h3>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <FaUser className=" border rounded-full"/>
                <p>username</p>
                <button className="bg-slate-700 p-1 rounded hover:opacity-80">Logout</button>
            </div>
        </div>
    )
}

export default Navbar