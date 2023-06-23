import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className=" bg-gray-800 w-full h-screen flex items-center justify-center">
      <Outlet/>
    </div>
  )
}

export default App