import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from './pages/register';
import App from './App';
import LoginPage from './components/Login';
import WelcomePage from './pages/welcome';
import About from './pages/about';
import { AuthUserProvider } from './context/auth';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LoginPage />
            },
            {
                path: "Register",
                element: <RegisterPage />,
            },
            {
                path: "Welcome",
                element:<WelcomePage/>
            },
            {
                path: "About",
                element: <About/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <AuthUserProvider>
     <RouterProvider router={router} />
   </AuthUserProvider>
);
