import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-primary-300 py-12 border border-b-slate-50/10">
      <div className="wrapper mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-white font-bold">Andre</h1>
        <div className="flex-1 flex gap-12 justify-end">
          <Link to="#" className="text-xl text-white">
            Home
          </Link>
          <Link to="#" className="text-xl text-white">
            About Me
          </Link>
          <Link to="#" className="text-xl text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
