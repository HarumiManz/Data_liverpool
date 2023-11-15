import { Grafica1 } from ".";
import { Grafica2 } from ".";
import { Grafica3 } from ".";
import { Grafica5 } from ".";
import { Pay } from ".";

export default function Dashboard() {
  return (
    <>
        <div className="py-10 px-20  bg-white">
          <h1 className=" text-3xl font-bold tracking-tight text-pink-800">
            ¡ Dale un vistazo al futuro de tu equipo !
          </h1>
          <p className="pt-5 font-light text-gray-700 md:text-lg">
            {" "}
            Con base a tus datos de prediccion podras hacer un analisis
            predictivo mas visual{" "}
          </p>
        </div>
        <div className="bg-white px-20">
        <div className="px-10 py-5 bg-white flex flex-row gap-4">
          <div className="basis-2/3">
            <Grafica2 />
          </div>
          <div className="basis-1/3">
            <Pay />
          </div>
        </div>
        <div className="px-10 bg-white grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <Grafica1 />
          </div>
          <div>
            <Grafica3 />
          </div>
        </div>

        <div className="py-5 px-40  bg-white">
          <Grafica5 />
        </div>
      </div>
    </>
  );
}
