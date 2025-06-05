import { Hero } from "@/app/components/hero/Hero";
import { About } from "@/app/components/about/About";
import { FindMe } from "@/app/components/find-me/FindMe";

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
