import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 py-6 border-b border-slate-50/10 transition-all duration-300 ${
        isScrolled ? "bg-primary-300/70 backdrop-blur-md" : "bg-primary-300"
      }`}
    >
      <div className="wrapper mx-auto flex items-center justify-between px-5 lgmd:px-0">
        <h1 className="text-2xl text-white font-bold">Andre</h1>
        <a
          href="https://wa.me/6285233755399"
          target="_blank"
          className="bg-green-100 flex md:hidden px-6 py-2 rounded-full font-bold text-xl text-slate-50 text-shadow-xl hover:bg-green-100/90"
        >
          Contact
        </a>
        <div className="flex-1 hidden md:flex gap-12 justify-end">
          <Link to="#" className="text-xl text-white">
            Home
          </Link>
          <Link to="#about" className="text-xl text-white">
            About Me
          </Link>
          <Link to="#messages" className="text-xl text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
