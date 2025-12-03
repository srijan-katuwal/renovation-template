import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Transformations />
        <FeaturedProjects />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
