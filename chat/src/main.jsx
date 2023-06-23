import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from './pages/register';
import App from './App';
import LoginPage from './components/Login';
import WelcomePage from './pages/welcome';

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
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
