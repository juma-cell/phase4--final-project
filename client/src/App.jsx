import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./pages/Home" 
import Layout from "./Layout/Layout"
import Login from "./pages/Login"
import "flowbite"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SingleTopic from "./pages/SingleTopic"
import SignOut from "./pages/SignOut"
import AddTopic from "./pages/AddTopic"
import ApprovedTopics from "./pages/ApprovedTopics"
import "./App.css";
import AuthProvider from "./context/AuthContext"
import DiscussProvider from "./context/DiscussContext"


function App() {



  return (
    <BrowserRouter>
    <AuthProvider>
    <DiscussProvider>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singletopic" element={<SingleTopic />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/addtopic" element={<AddTopic/>} />
        <Route path="/approvedtopics" element={<ApprovedTopics/>} />

        </Route>
        </Routes>
    </DiscussProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
