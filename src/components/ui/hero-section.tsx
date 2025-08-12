import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-4" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                Smart Transportation
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              TRACK YOUR
              <br />
              <span className="text-blue-600">RIDE TODAY!</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Real-time vehicle tracking, capacity monitoring, and smart notifications for your daily commute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Start Tracking
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Content - Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative">
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Track Your Ride</h3>
                        <p className="text-sm text-gray-500">Find available vehicles</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.405-3.405A2.032 2.032 0 0118 12V9a6.002 6.002 0 00-4-5.659V3a2 2 0 10-4 0v.341C7.67 4.165 6 6.388 6 9v3c0 .601-.166 1.169-.405 1.595L2 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Route Cards */}
                  <div className="p-6 space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Route 42</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Available</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Downtown → University</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Seats: 15/40</span>
                        <span>ETA: 3 min</span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Route 15</span>
                        <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Moderate</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Mall → City Center</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Seats: 28/40</span>
                        <span>ETA: 7 min</span>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Route 23</span>
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Full</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Airport → Downtown</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Seats: 40/40</span>
                        <span>ETA: 12 min</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Preview */}
                  <div className="mx-6 mb-6 h-32 bg-gray-100 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"></div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-6 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-gray-500">Live Map View</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-500">Tracking</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
