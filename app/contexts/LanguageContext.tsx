'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'am'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    home: 'Home',
    videos: 'Videos',
    products: 'Products',
    contact: 'Contact',
    admin: 'Admin',
    
    // Hero
    tagline: 'We bridge the gap between your problems and solutions.',
    taglinePart1: 'We bridge the gap',
    taglinePart2: 'between your problems and solutions.',
    followTikTok: 'Follow on TikTok',
    subscribeYouTube: 'Subscribe on YouTube',
    joinTelegram: 'Join on Telegram',
    exploreWork: 'Explore Our Work',
    viewProducts: 'View Products',
    
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'We are specialized content creators focused on delivering comprehensive insights across technology, business solutions, and emerging digital trends.',
    trustedPartner: 'Your Trusted Technology Bridge',
    aboutDescription: 'At TagBridge, we specialize in creating high-quality content that helps businesses and individuals navigate the complex world of technology. From comprehensive app reviews to cutting-edge AI tool analysis, we provide the insights you need to make informed decisions in today\'s digital landscape.',
    
    // Specialties
    appReviews: 'App Reviews',
    appReviewsDesc: 'In-depth analysis and honest reviews of mobile applications across all platforms.',
    softwareSolutions: 'Software Solutions',
    softwareSolutionsDesc: 'Comprehensive reviews and tutorials on productivity software and development tools.',
    erpSystems: 'ERP Systems',
    erpSystemsDesc: 'Expert insights on Enterprise Resource Planning systems and business automation.',
    aiTools: 'AI Tools',
    aiToolsDesc: 'Latest artificial intelligence tools, reviews, and implementation strategies.',
    cryptoInsights: 'Crypto Insights',
    cryptoInsightsDesc: 'Market analysis, blockchain technology insights, and cryptocurrency trends.',
    techAnalysis: 'Tech Analysis',
    techAnalysisDesc: 'Data-driven technology assessments and market trend predictions.',
    
    // Social Media
    followContentJourney: 'Follow Our Content Journey',
    contentJourneyDesc: 'Stay updated with our latest AI tool reviews, tech insights, and digital innovation content across platforms.',
    shortFormInsights: 'Short-form AI insights',
    inDepthAnalysis: 'In-depth analysis',
    communityUpdates: 'Community & Updates',
    
    // Call to Action
    readyToExplore: 'Ready to Explore Our Insights?',
    exploreDesc: 'Get in touch with us to discuss your technology needs or learn more about our specialized content and services.',
    readyToStart: 'Ready to Get Started?',
    startDesc: 'Contact us directly to discuss your needs and get personalized recommendations for the best products and services that will accelerate your digital transformation journey.',
    directCall: 'Direct Call',
    directCallDesc: 'Get immediate assistance and personalized consultation',
    whatsappChat: 'WhatsApp Chat',
    whatsappChatDesc: 'Quick responses and easy communication',
    chatNow: 'Chat Now',
    
    // Video Showcase
    featuredContent: 'Featured Content',
    featuredContentDesc: 'Watch our latest reviews and insights on technology, AI tools, and digital solutions',
    aiToolReview: 'AI Tool Review',
    aiToolReviewDesc: 'Latest AI tools analysis and comprehensive review of cutting-edge artificial intelligence solutions.',
    moreContentSoon: 'More Content Coming Soon',
    stayTuned: 'Stay Tuned',
    stayTunedDesc: 'We\'re constantly creating new content about the latest tech trends, software reviews, and digital insights.',
    requestReview: 'Request a Review',
    requestReviewDesc: 'Need a specific app, software, or AI tool reviewed? Contact us for personalized analysis and insights.',
    
    // Contact
    contactTitle: 'Contact Me',
    contactSubtitle: 'Ready to connect? Reach out directly through phone or WhatsApp for immediate assistance',
    telegramCommunity: 'Telegram Community',
    telegramCommunityDesc: 'Join our Telegram channel for exclusive content, updates, and community discussions.',
    
    // Footer
    footerDesc: 'Bridging technology and innovation with expert insights on AI tools, software solutions, and digital trends.',
    quickLinks: 'Quick Links',
    getInTouch: 'Get in Touch',
    copyright: 'All rights reserved.',
    builtWith: 'Built with ❤️ using Next.js & Tailwind CSS'
  },
  am: {
    // Header
    home: 'መነሻ',
    videos: 'ቪዲዮዎች',
    products: 'ምርቶች',
    contact: 'ግንኙነት',
    admin: 'አስተዳዳሪ',
    
    // Hero
    tagline: 'በችግሮችዎ እና በመፍትሔዎች መካከል ያለውን ክፍተት እንደፍናለን።',
    taglinePart1: 'እኛ ክፍተቱን እንዘጋለን',
    taglinePart2: 'በችግሮችዎ እና በመፍትሔዎች መካከል።',
    followTikTok: 'በቲክቶክ ይከተሉን',
    subscribeYouTube: 'በዩቲዩብ ይመዝገቡ',
    joinTelegram: 'በቴሌግራም ይቀላቀሉ',
    exploreWork: 'ስራዎቻችንን ይቃኙ',
    viewProducts: 'ምርቶቻችንን ይመልከቱ',
    
    // About
    aboutTitle: 'ስለ እኛ',
    aboutSubtitle: 'እኛ በቴክኖሎጂ፣ በንግድ መፍትሔዎች እና በዘመናዊ ዲጂታል አዝማሚያዎች ላይ ጥልቅ ግንዛቤዎችን በማቅረብ ላይ የተሰማራን የይዘት ፈጣሪዎች ነን።',
    trustedPartner: 'የእርስዎ የታመነ የቴክኖሎጂ ድልድይ',
    aboutDescription: 'በTagBridge፣ ንግዶች እና ግለሰቦች ውስብስብ የሆነውን የቴክኖሎጂ ዓለም በቀላሉ እንዲረዱ የሚያግዝ ጥራት ያለው ይዘት እናዘጋጃለን። ሰፊ የመተግበሪያ (App) ግምገማዎችን እንዲሁም የቅርብ ጊዜ የሰው ሰራሽ አስተውሎት (AI) መሣሪያዎችን በመተንተን፣ በዛሬው ዲጂታል ዓለም ውስጥ ትክክለኛ ውሳኔ እንዲያሳልፉ የሚያስፈልጉዎትን መረጃዎች እናቀርባለን።',
    
    // Specialties
    appReviews: 'የመተግበሪያ ግምገማዎች',
    appReviewsDesc: 'በሁሉም የሞባይል መድረኮች ላይ የሚገኙ መተግበሪያዎችን በጥልቀት እንመረምራለን፤ ታማኝ ግምገማዎችንም እንሰጣለን።',
    softwareSolutions: 'የሶፍትዌር መፍትሔዎች',
    softwareSolutionsDesc: 'በምርታማነት ሶፍትዌሮች እና በልማት መሣሪያዎች ላይ ሰፊ ትምህርቶችን እና ትንታኔዎችን እናቀርባለን።',
    erpSystems: 'የERP ሥርዓቶች',
    erpSystemsDesc: 'ስለ ድርጅት ሀብት ዕቅድ (ERP) ሥርዓቶች እና ስለ ንግድ አውቶሜሽን የባለሙያ ግንዛቤዎችን እናካፍላለን።',
    aiTools: 'AI መሣሪያዎች',
    aiToolsDesc: 'ስለ አዳዲስ የሰው ሰራሽ አስተውሎት (AI) መሣሪያዎች፣ አጠቃቀማቸው እና የትግበራ ስልቶች ትንታኔ እንሰጣለን።',
    cryptoInsights: 'የክሪፕቶ ግንዛቤዎች',
    cryptoInsightsDesc: 'የገበያ ትንተና፣ ስለ ብሎክቼይን ቴክኖሎጂ እና ስለ ክሪፕቶ ምንዛሬ ወቅታዊ አዝማሚያዎች መረጃ እናቀርባለን።',
    techAnalysis: 'የቴክኖሎጂ ትንተና',
    techAnalysisDesc: 'በመረጃ ላይ የተመሠረተ የቴክኖሎጂ ግምገማ እና የወደፊት የገበያ አቅጣጫ ትንበያዎች።',
    
    // Social Media
    followContentJourney: 'የይዘት ጉዞአችንን ይከተሉ',
    contentJourneyDesc: 'በቅርብ ጊዜ AI መሣሪያ ግምገማዎች፣ የቴክኖሎጂ ግንዛቤዎች እና የዲጂታል ፈጠራ ይዘቶች ላይ ወቅታዊ ሆነው ይቆዩ።',
    shortFormInsights: 'አጭር የAI ግንዛቤዎች',
    inDepthAnalysis: 'ጥልቅ ትንተና',
    communityUpdates: 'የማህበረሰብ እና ዝማኔዎች',
    
    // Call to Action
    readyToExplore: 'ግንዛቤዎቻችንን ለመቃኘት ዝግጁ ነዎት?',
    exploreDesc: 'የቴክኖሎጂ ፍላጎቶችዎን ለመወያየት ወይም ስለ ልዩ ይዘቶቻችን እና አገልግሎቶቻችን የበለጠ ለማወቅ ያግኙን።',
    readyToStart: 'ለመጀመር ዝግጁ ነዎት?',
    startDesc: 'የዲጂታል ለውጥ ጉዞዎን የሚያፋጥኑ ምርጥ ምርቶችን እና አገልግሎቶችን ለማግኘት በቀጥታ ያግኙን።',
    directCall: 'ቀጥተኛ ጥሪ',
    directCallDesc: 'ፈጣን እርዳታ እና ግላዊ ምክር ያግኙ',
    whatsappChat: 'WhatsApp ውይይት',
    whatsappChatDesc: 'ፈጣን ምላሽ እና ቀላል ግንኙነት',
    chatNow: 'አሁን ይወያዩ',
    
    // Video Showcase
    featuredContent: 'ተመራጭ ይዘት',
    featuredContentDesc: 'በቴክኖሎጂ፣ AI መሣሪያዎች እና ዲጂታል መፍትሔዎች ላይ የእኛን የቅርብ ጊዜ ግምገማዎች እና ግንዛቤዎች ይመልከቱ',
    aiToolReview: 'የAI መሣሪያ ግምገማ',
    aiToolReviewDesc: 'የቅርብ ጊዜ AI መሣሪያዎች ትንተና እና የዘመናዊ አርቴፊሻል ኢንተለጀንስ መፍትሔዎች ሰፊ ግምገማ።',
    moreContentSoon: 'ተጨማሪ ይዘት በቅርቡ',
    stayTuned: 'ይጠብቁ',
    stayTunedDesc: 'ስለ ቅርብ ጊዜ የቴክ አዝማሚያዎች፣ የሶፍትዌር ግምገማዎች እና ዲጂታል ግንዛቤዎች አዲስ ይዘት በቋሚነት እንፈጥራለን።',
    requestReview: 'ግምገማ ይጠይቁ',
    requestReviewDesc: 'የተወሰነ መተግበሪያ፣ ሶፍትዌር ወይም AI መሣሪያ ግምገማ ይፈልጋሉ? ለግላዊ ትንተና እና ግንዛቤዎች ያግኙን።',
    
    // Contact
    contactTitle: 'ያግኙኝ',
    contactSubtitle: 'ለመገናኘት ዝግጁ ነዎት? ለፈጣን እርዳታ በቀጥታ በስልክ ወይም በWhatsApp ያግኙን',
    telegramCommunity: 'የቴሌግራም ማህበረሰብ',
    telegramCommunityDesc: 'ለልዩ ይዘት፣ ዝማኔዎች እና የማህበረሰብ ውይይቶች የእኛን የቴሌግራም ቻናል ይቀላቀሉ።',
    
    // Footer
    footerDesc: 'በAI መሣሪያዎች፣ የሶፍትዌር መፍትሔዎች እና ዲጂታል አዝማሚያዎች ላይ የባለሙያ ግንዛቤዎች ያለው ቴክኖሎጂ እና ፈጠራን ማገናኘት።',
    quickLinks: 'ፈጣን አገናኞች',
    getInTouch: 'ያግኙን',
    copyright: 'ሁሉም መብቶች የተጠበቁ ናቸው።',
    builtWith: 'በNext.js እና Tailwind CSS በመጠቀም በ❤️ ተሰርቷል'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}