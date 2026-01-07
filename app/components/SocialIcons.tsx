interface SocialIconsProps {
  size?: 'small' | 'large'
}

export default function SocialIcons({ size = 'large' }: SocialIconsProps) {
  const iconSize = size === 'large' ? 'w-12 h-12' : 'w-8 h-8'
  const containerGap = size === 'large' ? 'gap-6' : 'gap-4'

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@tagbridge',
      icon: '🎵',
      color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600',
      featured: true
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@tagbridge',
      icon: '📺',
      color: 'hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-600',
      featured: true
    },
    {
      name: 'Telegram',
      url: 'https://t.me/tagbridge',
      icon: '✈️',
      color: 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-600',
      featured: true
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tagbridge',
      icon: '📷',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      featured: false
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/tagbridge',
      icon: '📘',
      color: 'hover:bg-blue-600',
      featured: false
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tagbridge',
      icon: '🐦',
      color: 'hover:bg-blue-400',
      featured: false
    }
  ]

  return (
    <div className={`flex justify-center ${containerGap}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${iconSize} 
            ${social.featured ? 'bg-gradient-to-br from-white to-gray-50 ring-2 ring-teal-200' : 'bg-white/90'} 
            backdrop-blur-sm
            rounded-full 
            shadow-lg 
            ${social.color} 
            hover:text-white 
            transition-all 
            duration-300 
            transform 
            ${social.featured ? 'hover:scale-125' : 'hover:scale-110'}
            hover:shadow-2xl
            hover:-translate-y-1
            flex 
            items-center 
            justify-center
            text-2xl
            border
            ${social.featured ? 'border-teal-200/50' : 'border-white/20'}
            hover:border-transparent
            group
            relative
            overflow-hidden
            ${social.featured ? 'animate-pulse-glow' : ''}
          `}
          aria-label={social.name}
          title={`Follow @tagbridge on ${social.name}`}
        >
          <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
            {social.icon}
          </span>
          <div className={`absolute inset-0 ${social.featured ? 'bg-gradient-to-br from-teal-400/30 to-orange-400/30' : 'bg-gradient-to-br from-teal-400/20 to-orange-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          {social.featured && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full animate-ping"></div>
          )}
        </a>
      ))}
    </div>
  )
}