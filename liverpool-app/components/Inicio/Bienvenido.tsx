import Image from "next/image";

export default function Bienvenido() {
  return (
    <>
      <div className="bg-gradient-to-r from-white via-white to-pink-300">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-5xl font-bold tracking-tight sm:text-4xl leading-none md:text-5xl xl:text-6xl text-pink-900">
              ¡Bienvenido a nuestro Portal de Predicción!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              "Enfocados en preservar el talento, te invitamos a descubrir cómo
              podemos juntos cuidar y prevenir la rotación de empleados en
              Liverpool.”
            </p>
            <a
              href="Herramienta"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-m px-9 py-3 text-center mr-2 mb-2"
            >
              Pruébalo
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              className="max-w-full rounded-full  "
              src="/images/img1.png"
              alt="Logo tec "
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
