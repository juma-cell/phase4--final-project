import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./pages/Home" 
import Layout from "./Layout/Layout"
import Login from "./pages/Login"
import "flowbite"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SingleTopic from "./pages/SingleTopic"
import UpdatePassword from "./pages/UpdatePassword"
import "./App.css";
function App() {


  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singletopic" element={<SingleTopic />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />

        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
