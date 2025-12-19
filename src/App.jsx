import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar page="home" page1="works" page2="contact" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
