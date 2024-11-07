import About from '@/components/About/About';
import Achieve from '@/components/Achieve/Achieve';
import Clients from '@/components/Clients/Clients';
import Community from '@/components/Community/Community';
import Development from '@/components/Development/Development';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
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
      </main>
    </>
  );
}
