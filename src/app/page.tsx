import About from '@/components/About/About';
import Achieve from '@/components/Achieve/Achieve';
import Clients from '@/components/Clients/Clients';
import Community from '@/components/Community/Community';
import Contacts from '@/components/Contacts/Contacts';
import Development from '@/components/Development/Development';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import Footer from '@/components/Footer/Footer';
import Future from '@/components/Future/Future';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Media from '@/components/Media/Media';
import Values from '@/components/Values/Values';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Development />
        <Community />
        <Media />
        <Values />
        <Achieve />
        <Clients />
        <Future />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
