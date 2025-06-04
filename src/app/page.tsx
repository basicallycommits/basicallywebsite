import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { FindMe } from "@/app/components/FindMe";
import { Contact } from "@/app/components/Contact";
import { GlobalBackground } from "@/app/components/GlobalBackground";

export default function Page() {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <main className="pt-24 space-y-32 px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <FindMe />
      </main>
      <Contact />
    </>
  );
}
