import AboutMe from "@/components/About/about";
import Experience from "@/components/Experience/experience";
import Hero from "@/components/Hero/hero";
import Projects from "@/components/Projects/projects";
import Quote from "@/components/Quote/quote";
import MySkills from "@/components/Skills/skills";
import Contact from "@/components/Contact/contact";
export default function Home() {
  return (
    <main className="w-[1200px] mx-auto">
      <Hero />
      <Quote />
      <AboutMe />
      <MySkills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
