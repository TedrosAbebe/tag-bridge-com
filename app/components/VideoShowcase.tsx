'use client'

export default function VideoShowcase() {
  const featuredVideos = [
    {
      id: 1,
      title: 'AI Tool Review',
      description: 'Latest AI tools analysis and comprehensive review of cutting-edge artificial intelligence solutions.',
      platform: 'TikTok',
      url: 'https://vm.tiktok.com/ZMATGFD8b/',
      embedId: 'ZMATGFD8b',
      category: 'AI Tools'
    }
  ]

  return (
    <section id="video-showcase" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our latest reviews and insights on technology, AI tools, and digital solutions
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <div key={video.id} className="card animate-slide-up">
              {/* Video Embed */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {video.platform === 'TikTok' ? (
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center relative">
                    <div className="text-center text-white z-10">
                      <div className="text-4xl mb-2">🎵</div>
                      <p className="text-sm font-medium">TikTok Video</p>
                      <p className="text-xs opacity-75 mb-4">AI Tool Review</p>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                      >
                        Watch on TikTok
                      </a>
                    </div>
                    {/* TikTok Pattern Background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                    {video.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {video.platform}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {video.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href="tel:+251991856292"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    📞 Discuss
                  </a>
                  <a 
                    href="https://wa.me/251991856292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    💬 Chat
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* More Content Coming Soon Card */}
          <div className="card">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-gray-600 font-medium">More Content</p>
                <p className="text-gray-500 text-sm">Coming Soon</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stay Tuned
              </h3>
              <p className="text-gray-600 mb-6">
                We're constantly creating new content about the latest tech trends, software reviews, and digital insights.
              </p>
              <div className="flex gap-3">
                <a 
                  href="tel:+251991856292"
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  📞 Get Updates
                </a>
                <a 
                  href="https://wa.me/251991856292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  💬 Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* Request Custom Review Card */}
          <div className="card">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <p className="text-gray-600 font-medium">Custom Reviews</p>
                <p className="text-gray-500 text-sm">On Request</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Request a Review
              </h3>
              <p className="text-gray-600 mb-6">
                Need a specific app, software, or AI tool reviewed? Contact us for personalized analysis and insights.
              </p>
              <div className="flex gap-3">
                <a 
                  href="tel:+251991856292"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  📞 Request
                </a>
                <a 
                  href="https://wa.me/251991856292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  💬 Discuss
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}