import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { FindMe } from "@/app/components/FindMe";
import { Contact } from "@/app/components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="px-4 sm:px-6 lg:px-8">
        <About />
        <FindMe />
      </main>
    </>
  );
};

export default Home;
