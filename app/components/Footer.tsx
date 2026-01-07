'use client'



export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <h3 className="text-4xl font-black bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                TagBridge
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Bridging technology and innovation with expert insights on AI tools, software solutions, and digital trends.
            </p>
          </div>

          {/* Enhanced Quick Links */}
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group text-gray-300 hover:text-teal-400 transition-all duration-300 text-lg font-medium relative"
                >
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 bg-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group text-gray-300 hover:text-orange-400 transition-all duration-300 text-lg font-medium relative"
                >
                  <span className="relative z-10">Products & Books</span>
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-2 -my-1"></div>
                </button>
              </li>
            </ul>
          </div>

          {/* Enhanced Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Follow Us
            </h4>
            <div className="space-y-4">
              <a 
                href="https://tiktok.com/@tagbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-end text-gray-300 hover:text-pink-400 transition-all duration-300 text-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                  </svg>
                </div>
                TikTok @tagbridge
              </a>
              <a 
                href="https://youtube.com/@tagbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-end text-gray-300 hover:text-red-400 transition-all duration-300 text-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                YouTube @tagbridge
              </a>
              <a 
                href="https://t.me/tagbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center md:justify-end text-gray-300 hover:text-blue-400 transition-all duration-300 text-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                Telegram @tagbridge
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-lg">
              © {currentYear} TagBridge. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 group bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 z-40 border border-white/20"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </footer>
  )
}