import Inicio from "@/components/Inicio/inicio";
import { Bienvenido } from "@/components/Inicio";

export default function Home() {
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <Bienvenido/>
        <Inicio/>
      </header>
    </div>
  );
}
