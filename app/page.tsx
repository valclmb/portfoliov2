import { Networks } from "@/components/Networks";
import { Presentation } from "@/components/Presentation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative h-screen  text-white font-light p-5 z-50 ">
      <section className="w-2/3 m-auto mt-16">
        <Presentation />
        <Networks />
        <Skills />
        <Projects />
      </section>
    </main>
  );
}
