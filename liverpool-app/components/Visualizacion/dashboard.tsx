import { Barra, BarraDoble, Dispersion, Lineal, Pay } from ".";
import Image from "next/image";

export default function DashBoard() {
  return (
    <>
      <div className="py-10 px-20 bg-white ">
        <div>
          <h1 className="items-center justify-center content-center text-center text-4xl font-bold tracking-tight text-pink-800">
            ¿En dónde estamos parados?
          </h1>
          <p className="mb-7 pt-5 font-light text-gray-700 md:text-lg text-center">
            {" "}
            Conoce los <span className="font-bold text-pink-700">principales insights</span> sobre los datos más importantes y significativos
            que influyen en la decisión de una persona por renunciar y compara los datos que
            proporcionaste con anterioridad. {" "}
          </p>
          <p className="font-bold text-pink-900 text-xl mb-5">¿De qué me sirve?</p>
          <p className=" mb-5 text-justify text-base text-gray-700 font-light">Conocer el <span className="font-bold text-pink-700">contexto</span> al que te estás enfrentando ayuda a tomar <span className="font-bold text-pink-700">mejores decisiones</span> a la hora de implementar estrategias para la <span className="font-bold text-pink-700"> retención de talento</span>.
          </p>
          <p className="font-bold text-pink-900 text-xl mb-3">¿Cómo funciona?</p>
          <p className=" mb-5 text-justify text-base text-gray-700 font-light"> Las gráficas se actualizan en base al excel ingresado con anterioridad en la sección de predicción,
            por lo que en caso de no visualizar nada, porfavor <span className="font-bold text-pink-700"> sube un documento</span> (sigue las intrucciones de la sección "pasos").
          </p>
          <p className="font-light text-sm text-left text-pink-900">* Los siguientes análisis aplican únicamente para tiendas Liverpool, CeDis y Suburbia. </p>
        </div>
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
