import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import PostDetails from "../pages/PostDetails";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import OtpPage from "../pages/OtpPage";
import Auth from "./assets/Auth";
import Auth1 from "./assets/Auth1";
import { UserProvider } from "../context/UserContext";

export default function App() {
  return (
    // <Router>
    //   <Navbar page="home" page1="works" page2="contact" />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/works" element={<Works />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer/>
    // </Router>
    <UserProvider>
      <Router>
        {/* <Navbar page="home" page1="works" page2="contact" /> */}
        <Routes>
          <Route element={<Auth1 />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<OtpPage />} />
          </Route>

          <Route element={<Auth />}>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/postdetails" element={<PostDetails />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}
