import Image from "next/image";

export default function StoryTelling() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-800 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl dark:text-white">
              ¿Sabías qué?
            </h2>
            <p className="mb-2  text-xl ">
              Mediante un estudio realizado por OCCMundial, junto con las
              consultoras GDP y Grupo Azimuth, se descubrió que en{" "}
              <span className="text-2xl font-bold text-pink-700">México 4 de cada 10</span> empleados
              estarían dispuestos a <span className="text-2xl font-bold text-pink-700">renunciar</span>{" "}
              a su actual puesto laboral en los
              <span className="text-2xl font-bold text-pink-700">próximos 6 meses</span>, lo que
              equivale a llenar
              <span className="text-2xl font-bold text-pink-700"> 600 </span>veces el{" "}
              <span className="text-2xl font-bold text-pink-700">Estadio Azteca.</span>
            </p>
            <p className="text-m text-right font-bold text-pink-700">- Forbes México </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="mt-4 w-full rounded-lg"
              src="/images/mapa1.jpeg"
              alt="mapa1 "
              width={500}
              height={400}
            />
            <Image
              className="mt-4 w-full lg:mt-14 rounded-lg"
              src="/images/mapa2.jpeg"
              alt="mapa2"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
