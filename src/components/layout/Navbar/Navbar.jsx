import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            {/* Main Bar */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-extrabold tracking-tight bg-linear-to-r from-white via-purple-400 to-emerald-400 bg-clip-text text-transparent"
                >
                    SIRA Digital
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-9">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
                        >
                            {link.label}
                            {/* Underline animation */}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-purple-400 to-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="text-sm font-medium text-white px-5 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-purple-400/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        Start a Project →
                    </Link>
                </div>

                {/* Hamburger (Mobile) */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden flex flex-col bg-black/95 backdrop-blur-lg border-t border-white/10 px-6 overflow-hidden transition-all duration-300 ${
                    menuOpen ? "max-h-96 py-4" : "max-h-0"
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10 last:border-none transition-colors duration-200"
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="text-purple-400 font-semibold py-3 transition-colors duration-200"
                >
                    Start a Project →
                </Link>
            </div>
       </nav>
    );
};

export default Navbar;