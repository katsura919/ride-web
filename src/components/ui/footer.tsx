
export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto justify-between">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between lg:justify-between gap-10 md:gap-0">
          {/* Brand Section */}
          <div className="md:w-1/3 flex flex-col mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="font-bold text-2xl text-white">Ride Alert</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-2">
              A product by <a href="#" className="text-blue-400 hover:underline">Ride Alert</a>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-2">
              Building in public at <a href="#" className="text-blue-400 hover:underline">@ridealert</a>
            </p>
          </div>
          {/* Links Section */}
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-16">
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Components</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Box Shadows</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Showcase</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Playground</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Ride Alert Pro</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Ride Alert</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Sponsor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Affiliate</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center   pt-6">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Ride Alert. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xs">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
