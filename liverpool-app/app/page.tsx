import Inicio from "@/components/Inicio/inicio";
import { Bienvenido, StoryTelling , Datos} from "@/components/Inicio";

export default function Home() {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <Bienvenido/>
        <StoryTelling/>
        <Datos/>
        <Inicio/>
      </header>
    </div>
  );
}
