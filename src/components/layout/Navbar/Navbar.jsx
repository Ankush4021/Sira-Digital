import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0b0717]/80 border-b border-white/10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-lg sm:text-2xl font-bold text-white">
                    SIRA <span className="text-purple-500">Digital</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-slate-200 font-semibold">
                    <li className="hover:text-purple-400 transition">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="hover:text-purple-400 transition">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="hover:text-purple-400 transition">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="hover:text-purple-400 transition">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>


                {/* CTA Button */}
                <button className="hidden md:block px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition cursor-pointer">
                    Get Started
                </button>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-sm border px-4 py-2 rounded-lg text-white border-white/40"
                >
                    Menu
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden bg-[#0b0717] border-t border-white/10">
                    <ul className="flex flex-col p-4 gap-4 text-white font-semibold">
                        <li className="hover:text-purple-400 cursor-pointer transition">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-purple-400 cursor-pointer transition">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-purple-400 cursor-pointer transition">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="hover:text-purple-400 cursor-pointer transition">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <button className="mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition">
                            Get Started
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
