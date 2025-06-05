import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { FindMe } from "@/app/components/FindMe";
import { Contact } from "@/app/components/Contact";
import { GlobalBackground } from "@/app/components/GlobalBackground";

const Home = () => {
  return (
    <>
      <GlobalBackground />
      <Hero />
      <main className="px-4 sm:px-6 lg:px-8">
        <About />
        <FindMe />
      </main>
      <Contact />
    </>
  );
};

export default Home;
