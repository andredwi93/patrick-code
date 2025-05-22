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
      <div className="wrapper mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-white font-bold">Andre</h1>
        <div className="flex-1 flex gap-12 justify-end">
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
