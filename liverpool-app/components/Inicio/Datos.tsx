import Image from "next/image";

export default function Datos() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="pt-14 mx-auto max-w-screen-sm ">
          <h2 className="flex justify-center items-center mb-4 text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl dark:text-white">
            ¿En dónde estamos parados?
          </h2>
          <p className="flex justify-center items-center mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Grupo Puerto Liverpool cuenta con aproximadamente una población de
            73,330 colaboradores los cuales se ubican principalmente en
            Suburbia, CeDis y Liverpool pero debido a la rotación de empleados
            que han experimentado de 2019-2023 han tenido que contratar…
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-3">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                LIVERPOOL
              </h3>
              <p className="my-4">
                El 70% de la fuerza laboral dentro de Liverpool para cubrir
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                CEDIS
              </h3>
              <p className="my-4">
                3 veces toda la fuerza laboral de CeDis para cubrir todas sus
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                SUBURBIA
              </h3>
              <p className="my-4">
                1.5 veces toda la fuerza laboral de Suburbia para cubrir todas
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
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-3">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                LIVERPOOL
              </h3>
              <p className="my-4">
                El 70% de la fuerza laboral dentro de Liverpool para cubrir
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                CEDIS
              </h3>
              <p className="my-4">
                3 veces toda la fuerza laboral de CeDis para cubrir todas sus
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                SUBURBIA
              </h3>
              <p className="my-4">
                1.5 veces toda la fuerza laboral de Suburbia para cubrir todas
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
      </section>
    </>
  );
}
