import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'
import PromotionBanner from './components/PromotionBanner'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <PromotionBanner position="top" />
      <Header />
      <Hero />
      <PromotionBanner position="hero" />
      <AboutSection />
      <ProductsSection />
      <PromotionBanner position="bottom" />
      <Footer />
    </main>
  )
}