import Inicio from "@/components/Inicio/inicio";
import { Bienvenido, StoryTelling, Objetivo } from "@/components/Inicio";

export default function Home() {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <Bienvenido/>
        <Objetivo/>
        <StoryTelling/>
        <Inicio/>
      </header>
    </div>
  );
}
