import About from '@/components/About/About';
import Development from '@/components/Development/Development';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Development />
      </main>
    </>
  );
}
