'use client'

import { useState, useEffect } from 'react'

interface Video {
  id: string
  title: string
  description: string
  embedUrl: string
  platform: 'TikTok' | 'YouTube'
}

export default function VideoSection() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    // Load videos from localStorage (admin managed)
    const adminVideos = localStorage.getItem('adminVideos')
    if (adminVideos) {
      setVideos(JSON.parse(adminVideos))
    } else {
      // Default videos if no admin data
      const defaultVideos = [
        {
          id: '1',
          title: 'Latest TikTok Content',
          description: 'Check out my latest viral TikTok videos with amazing content and entertainment.',
          embedUrl: 'https://www.tiktok.com/embed/v2/7234567890123456789',
          platform: 'TikTok' as const
        },
        {
          id: '2',
          title: 'YouTube Channel Highlights',
          description: 'Subscribe to my YouTube channel for in-depth videos and tutorials.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          platform: 'YouTube' as const
        }
      ]
      setVideos(defaultVideos)
    }
  }, [])

  return (
    <section id="videos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch my latest content across TikTok and YouTube platforms
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="card animate-slide-up">
              {/* Video Embed */}
              <div className="aspect-video bg-gray-100 relative">
                {video.platform === 'YouTube' ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">🎵</div>
                      <p className="text-sm">TikTok Video</p>
                      <p className="text-xs opacity-75">Click to view on TikTok</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {video.title}
                  </h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {video.platform}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {video.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href="tel:+251991856292"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    📞 Call
                  </a>
                  <a 
                    href="https://wa.me/251991856292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}