import { Pay, Barra, BarraDoble, Dispersion, Calor, Lineal } from ".";

export default function Dashboard() {
  return (
    <>
      <div className="py-10 px-14  bg-white">
        <div className="px-10">
          <h1 className=" text-3xl font-bold tracking-tight text-pink-800">
            ¡Dale un vistazo al futuro de tu equipo!
          </h1>
          <p className="py-5 font-light text-gray-700 md:text-lg">
            {" "}
            Con base a tus datos de predicción podrás hacer un análisis
            predictivo mas visual{" "}
          </p>
        </div>

        <div className="px-10 py-5 bg-white flex flex-row gap-4">
          <div className="basis-2/3 ">
            <BarraDoble />
          </div>
          <div className="basis-1/3">
            <Pay />
          </div>
        </div>
        <div className="px-10 bg-white grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <Dispersion />
          </div>
          <div>
            <Barra />
          </div>
        </div>
        <div className="py-5 px-10 bg-white grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <Lineal />
          </div>
          <div>
            <Calor />
          </div>
        </div>
      </div>
    </>
  );
}
