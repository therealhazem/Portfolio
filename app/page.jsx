import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import InfinityMarque from "../src/components/InfinityMarque";
import Navbar from "../src/components/Navbar";
import Work from "../src/components/Work";
import WorksAt from "../src/components/WorksAt";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorksAt />
      <InfinityMarque />
      <Work />
      <Footer />
    </>
  );
}


