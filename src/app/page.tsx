import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Transformations } from "@/components/Transformations";
import { ContentCreator } from "@/components/ContentCreator";
import { Apps } from "@/components/Apps";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Certifications />
        <Transformations />
        <ContentCreator />
        <Apps />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
