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
                src="/images/Liverpool70.png"
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
                src="/images/CeDis3.png"
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
                src="/images/Suburbia1.5.png"
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
                <span className="font-bold text-pink-700 text-xl"> Vendedor </span> es el primer puesto con más población, pero <span className="font-bold text-pink-700 text-xl"> Cajero </span>
                es el puesto con la tasa más alta de rotación ya que en <span className="font-bold text-pink-700 text-xl"> 1 año </span> necesitas contratar <span className="font-bold text-pink-700 text-xl">3 personas </span>
                para cubrir las actividades de <span className="font-bold text-pink-700 text-xl"> 1 posición </span>.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/personasprueba.png"
                alt="analitica "
                width={700}
                height={700}
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
                <span className="font-bold text-pink-700 text-xl"> Personal  </span> es el primer puesto con más población, pero <span className="font-bold text-pink-700 text-xl"> Recepción </span>
                es el puesto con la tasa más alta de rotación ya que en <span className="font-bold text-pink-700 text-xl"> 1 año </span> necesitas contratar <span className="font-bold text-pink-700 text-xl">10 personas </span>
                para cubrir las actividades de <span className="font-bold text-pink-700 text-xl"> 1 posición </span>.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/personasCeDis.png"
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
                <span className="font-bold text-pink-700 text-xl"> Auxiliar </span> es el primer puesto con más población, pero <span className="font-bold text-pink-700 text-xl"> Cajero </span>
                es el puesto con la tasa más alta de rotación ya que en <span className="font-bold text-pink-700 text-xl"> 1 año </span> necesitas contratar <span className="font-bold text-pink-700 text-xl">6 personas </span>
                para cubrir las actividades de <span className="font-bold text-pink-700 text-xl"> 1 posición </span>.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <Image
                src="/images/personassub.png"
                alt="analitica "
                width={700}
                height={700}
                className="px-10 "
              />
            </figcaption>
          </figure>
        </div>
        <p className=" text-right text-xs text-pink-700 text-bold"> *Asumiendo que los datos de personal activo son representativos de la población de toda la compañía.</p>
        <p className=" text-right text-xs text-pink-700"> **El análisis realizado en esta sección se basa en los datos proporcionados por Grupo Puerto Liverpool.</p>
      </section>
    </>
  );
}
