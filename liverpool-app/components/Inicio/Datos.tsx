import Image from "next/image";

export default function Datos() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="pt-14 mx-auto px-20 ">
          <h2 className="flex justify-center items-center mb-4 text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl dark:text-white">
            ¿En dónde estamos parados?
          </h2>
          <p className="pb-5 px-20 flex justify-center items-center text-center mb-4 font-light text-gray-700 lg:mb-5 sm:text-xl dark:text-gray-400">
            Grupo Puerto Liverpool cuenta con aproximadamente una población de
            73,330 colaboradores los cuales se ubican principalmente en 
            Suburbia, CeDis y Liverpool pero debido a la rotación de empleados
            que han experimentado de 2019-2023 han tenido que contratar…
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-3">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                LIVERPOOL
              </h3>
              <p className="my-4">
                El <span className="text-2xl font-bold text-pink-700">70%</span> de la fuerza laboral dentro de Liverpool para cubrir
                todas sus posiciones.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/casa1.jpeg"
                alt="analitica "
                width={300}
                height={300}
                className="px-10"
              />
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                CEDIS
              </h3>
              <p className="my-4">
                <span className="text-2xl font-bold text-pink-700">3 veces</span> toda la fuerza laboral de CeDis para cubrir todas sus
                posiciones.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/casa2.jpeg"
                alt="analitica "
                width={300}
                height={300}
                className="px-10 "
              />
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                SUBURBIA
              </h3>
              <p className="my-4">
                <span className="text-2xl font-bold text-pink-700">1.5 veces</span> toda la fuerza laboral de Suburbia para cubrir todas
                sus posiciones.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/casa3.jpeg"
                alt="analitica "
                width={300}
                height={300}
                className="px-10 "
              />
            </figcaption>
          </figure>
        </div>
        <div className="pt-14 mx-auto">
          <h1 className="flex justify-center items-center mb-4 text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl dark:text-white"> ¿Tú o tu equipo son propensos a renunciar?</h1>  
          <p className="px-20 flex justify-center items-center text-center mb-4 font-light text-gray-700 lg:mb-5 sm:text-xl dark:text-gray-400">
            Dentro de las tres tiendas antes mencionadas la baja de personal no
            es igual en todos los puestos, existen algunos con más riesgo.
          </p >
          <p className="px-20 pb-5 flex justify-center items-center text-center mb-8 font-light text-gray-700 lg:mb-10 sm:text-xl dark:text-gray-400">
            Los puestos con mayor tasa de renuncia sufren de aproximadamente 6
            cambios en un lapso menor a 1 año, lo que podría jugar un papel
            significativo en la alta tasa de renuncias dentro de la
            organización.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-3">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                LIVERPOOL
              </h3>
              <p className="my-4">
              <span className="font-bold text-pink-700 text-xl">Cajero </span> es el cuarto puesto con mayor población, pero necesitas
              <span className="font-bold text-pink-700 text-xl">1.2</span> personas para cubrir <span className="font-bold text-pink-700 text-xl">1</span> posición.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/burbuja1.jpeg"
                alt="analitica "
                width={350}
                height={350}
                className="px-10"
              />
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                CEDIS
              </h3>
              <p className="my-4">
                <span className="font-bold text-pink-700 text-xl">Recepción</span> es el segundo puesto con más población, pero necesitas
                contratar <span className="font-bold text-pink-700 text-xl">5</span> personas para cubrir <span className="font-bold text-pink-700 text-xl">1</span> posición.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/burbuja3.jpeg"
                alt="analitica "
                width={700}
                height={700}
                className="px-10 "
              />
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-bold text-pink-900 dark:text-white">
                SUBURBIA
              </h3>
              <p className="my-4">
                <span className="font-bold text-pink-700 text-xl">Cajero</span> es el segundo puesto con más población, pero necesitas
                contratar <span className="font-bold text-pink-700 text-xl">3</span> personas para cubrir <span className="font-bold text-pink-700 text-xl">1</span> posición.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/burbuja2.jpeg"
                alt="analitica "
                width={600}
                height={600}
                className="px-10 "
              />
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
