'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useEffect } from 'react'

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = language
    
    // Add language-specific class to body
    document.body.className = document.body.className.replace(/\blang-\w+\b/g, '')
    document.body.classList.add(`lang-${language}`)
    
    // Update page title based on language
    if (language === 'am') {
      document.title = 'ታግብሪጅ - በችግሮችዎ እና በመፍትሔዎች መካከል ያለውን ክፍተት እንደፍናለን'
    } else {
      document.title = 'TagBridge - We bridge the gap between your problems and solutions'
    }
  }, [language])

  return <>{children}</>
}