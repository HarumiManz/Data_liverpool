import { Barra, BarraDoble, Dispersion, Lineal, Pay } from ".";
import Image from "next/image";

export default function DashBoard() {
  return (
    <>
      <div className="py-10 px-20  bg-white">
        <h1 className=" text-3xl font-bold tracking-tight text-pink-800">
          ¡ ve un analisis descriptivo !
        </h1>
        <p className="pt-5 font-light text-gray-700 md:text-lg">
          {" "}
          Con base a tus datos de prediccion podras hacer un analisis
          descriptivo mas visual{" "}
        </p>
        <Image
          src="/images/bolo1.png"
          alt="analitica "
          width={300}
          height={300}
          className="px-10"
        />
      </div>
      <div className="px-10 py-5 bg-white flex flex-row gap-4">
        <div className="basis-2/3">
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
      <div className="py-5 px-40  bg-white">
        <Lineal />
      </div>
    </>
  );
}
