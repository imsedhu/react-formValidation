import Signin from "./Components/Signin";
import './App.css';
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Signin /> 
    },
    {
      path: "signup",
      element: <Signup />
    },
    {
      path: "home",
      element: <Home />
    }
  ])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;