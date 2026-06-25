import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Ventures from '@/components/Ventures';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Ventures />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
