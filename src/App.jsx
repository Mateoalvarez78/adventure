import Navbar from './components/Navbar/Navbar'
import HeroSlider from './components/HeroSlider/HeroSlider'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import LocationSection from './components/LocationSection/LocationSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import {
  benefitsSection,
  featureSections,
  footerInfo,
  heroSlides,
  locationInfo,
  navLinks,
} from './data/content'

function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        <HeroSlider slides={heroSlides} />
        <BenefitsSection content={benefitsSection} />

        {featureSections.map((feature) => (
          <FeatureSection key={feature.id} feature={feature} />
        ))}

        <LocationSection info={locationInfo} />
        <ContactSection />
      </main>
      <Footer info={footerInfo} />
    </>
  )
}

export default App
