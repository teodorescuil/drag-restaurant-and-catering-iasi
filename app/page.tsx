// import Image from "next/image";
import DailyMenu from './components/daily-menu/DailyMenu';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Events from './components/events/Events';
import FullMenuPreview from './components/full-menu-preview/FullMenuPreview';
export default function Home() {
  return (
    <>
      <Hero />
      <DailyMenu />
      <FullMenuPreview />
      <About />
      <Events />
      <Contact />
    </>
  );
}
