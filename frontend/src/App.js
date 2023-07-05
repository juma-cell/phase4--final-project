import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./pages/Home" 
import Layout from "./layout/Layout"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SingleDiscuss from "./pages/SingleDiscuss"
import AddDiscuss from "./pages/AddDiscuss"
import ApprovedDiscuss from "./pages/ApprovedDiscuss"
import "./App.css";
import AuthProvider from "./context/AuthContext"
import DiscussProvider from "./context/DiscussContext"

export default function App() {
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
        <Route path="/singlediscuss" element={<SingleDiscuss/>} />
        <Route path="/addDiscuss" element={<AddDiscuss/>} />
       <Route path="/approveddiscuss" element={<ApprovedDiscuss/>} />

        </Route>
         </Routes>
     </DiscussProvider>
     </AuthProvider>
     </BrowserRouter>
  )
}
