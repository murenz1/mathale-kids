import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import Gallery from '@/components/sections/Gallery'
import Impact from '@/components/sections/Impact'
import Approach from '@/components/sections/Approach'
import About from '@/components/sections/About'
import MeetKids from '@/components/sections/MeetKids'
import Support from '@/components/sections/Support'
import Vision from '@/components/sections/Vision'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Impact />
        <Approach />
        <About />
        <MeetKids />
        <Support />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
