import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full px-6 lg:px-8 py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <span className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">Ride Alert</span>
        </Link>
        
        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {["Features",  "Trips", "Help"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Sign In and Download App Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
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
