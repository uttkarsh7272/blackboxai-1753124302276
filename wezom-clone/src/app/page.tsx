import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Clients from '@/components/Clients'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import WhyChooseUs from '@/components/WhyChooseUs'
import Industries from '@/components/Industries'
import Testimonials from '@/components/Testimonials'
import Technologies from '@/components/Technologies'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Clients />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Technologies />
      <FAQ />
      <Footer />
    </main>
  )
}
