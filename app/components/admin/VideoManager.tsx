'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, ExternalLink, Video } from 'lucide-react'

interface Video {
  id: string
  title: string
  description: string
  embedUrl: string
  platform: 'TikTok' | 'YouTube'
}

export default function VideoManager() {
  const [videos, setVideos] = useState<Video[]>([])
  const [isAddingVideo, setIsAddingVideo] = useState(false)
  const [editingVideo, setEditingVideo] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    embedUrl: '',
    platform: 'YouTube' as 'TikTok' | 'YouTube'
  })

  useEffect(() => {
    // Load videos from localStorage
    const savedVideos = localStorage.getItem('adminVideos')
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos))
    } else {
      // Initialize with default videos
      const defaultVideos: Video[] = [
        {
          id: '1',
          title: 'Latest TikTok Content',
          description: 'Check out my latest viral TikTok videos with amazing content and entertainment.',
          embedUrl: 'https://www.tiktok.com/embed/v2/7234567890123456789',
          platform: 'TikTok'
        },
        {
          id: '2',
          title: 'YouTube Channel Highlights',
          description: 'Subscribe to my YouTube channel for in-depth videos and tutorials.',
          embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          platform: 'YouTube'
        }
      ]
      setVideos(defaultVideos)
      localStorage.setItem('adminVideos', JSON.stringify(defaultVideos))
    }
  }, [])

  const saveVideos = (updatedVideos: Video[]) => {
    setVideos(updatedVideos)
    localStorage.setItem('adminVideos', JSON.stringify(updatedVideos))
  }

  const handleAddVideo = () => {
    if (formData.title && formData.description && formData.embedUrl) {
      const newVideo: Video = {
        id: Date.now().toString(),
        ...formData
      }
      const updatedVideos = [...videos, newVideo]
      saveVideos(updatedVideos)
      setFormData({ title: '', description: '', embedUrl: '', platform: 'YouTube' })
      setIsAddingVideo(false)
    }
  }

  const handleEditVideo = (id: string) => {
    const video = videos.find(v => v.id === id)
    if (video) {
      setFormData({
        title: video.title,
        description: video.description,
        embedUrl: video.embedUrl,
        platform: video.platform
      })
      setEditingVideo(id)
    }
  }

  const handleUpdateVideo = () => {
    if (editingVideo && formData.title && formData.description && formData.embedUrl) {
      const updatedVideos = videos.map(video =>
        video.id === editingVideo
          ? { ...video, ...formData }
          : video
      )
      saveVideos(updatedVideos)
      setFormData({ title: '', description: '', embedUrl: '', platform: 'YouTube' })
      setEditingVideo(null)
    }
  }

  const handleDeleteVideo = (id: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      const updatedVideos = videos.filter(video => video.id !== id)
      saveVideos(updatedVideos)
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', embedUrl: '', platform: 'YouTube' })
    setIsAddingVideo(false)
    setEditingVideo(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Video Management</h2>
        <button
          onClick={() => setIsAddingVideo(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Video
        </button>
      </div>

      {/* Add/Edit Form */}
      {(isAddingVideo || editingVideo) && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingVideo ? 'Edit Video' : 'Add New Video'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter video title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform
              </label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value as 'TikTok' | 'YouTube' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="YouTube">YouTube</option>
                <option value="TikTok">TikTok</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter video description"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Embed URL
              </label>
              <input
                type="url"
                value={formData.embedUrl}
                onChange={(e) => setFormData({ ...formData, embedUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://www.youtube.com/embed/VIDEO_ID or https://www.tiktok.com/embed/..."
              />
              <p className="text-xs text-gray-500 mt-1">
                For YouTube: Use embed URL format. For TikTok: Use TikTok embed URL.
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={resetForm}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              <X className="h-4 w-4 mr-2 inline" />
              Cancel
            </button>
            <button
              onClick={editingVideo ? handleUpdateVideo : handleAddVideo}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Save className="h-4 w-4 mr-2 inline" />
              {editingVideo ? 'Update' : 'Add'} Video
            </button>
          </div>
        </div>
      )}

      {/* Videos List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Video Preview */}
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
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 truncate flex-1">
                  {video.title}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
                  {video.platform}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {video.description}
              </p>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <a
                  href={video.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View
                </a>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditVideo(video.id)}
                    className="p-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteVideo(video.id)}
                    className="p-1 text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {videos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Video className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No videos yet</h3>
          <p className="text-gray-600 mb-4">Get started by adding your first video.</p>
          <button
            onClick={() => setIsAddingVideo(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Add Your First Video
          </button>
        </div>
      )}
    </div>
  )
}