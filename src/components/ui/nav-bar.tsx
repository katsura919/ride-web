import { Link } from "react-router-dom";
import { Car } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="w-full px-6 lg:px-8 py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white group-hover:text-blue-700 transition-colors">Ride Alert</span>
        </Link>
        
        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {["Features",  "Trips", "Help"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Sign In and Download App Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-white hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
            Sign In
          </Link>
          <button className="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
}
