import { useState } from "react";
import { Menu, X, PenTool, Home } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../src/assets/logo.jpeg";

const Navbar = ({ page, page1, page2 }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <PenTool className="text-purple-400" /> */}
          <img className="h-11 rounded-full" src={logo} alt="" />
          <span className="text-2xl font-bold text-white">Olamifeng.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#f2c311]" : "hover:text-[#f2c311]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "text-[#f2c311]" : "hover:text-[#f2c311]"
            }
          >
            Written Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#f2c311]" : "hover:text-[#f2c311]"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-4 space-y-4">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-[#f2c311]"
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-[#f2c311]"
          >
            Written Works
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-[#f2c311]"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
