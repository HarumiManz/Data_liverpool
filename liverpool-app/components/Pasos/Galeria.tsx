import Image from "next/image";

export default function Galeria() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="text-left mx-auto max-w-7xl px-20 pt-10 sm:px-6 lg:px-8">
          <h1 className=" max-w-2xl mb-4 text-2xl font-bold tracking-tight sm:text-4xl leading-none md:text-4xl xl:text-2xl text-pink-900 ">
            ¡VIVE LA MEJOR EXPERIENCIA!
          </h1>
        </div>
        <p className=" text-2xl font-light text-gray-800 md:text-lg lg:text-xl py-3 px-8">Te guiamos paso a paso en el uso de la herramienta</p>

      </header>
      <div className="px-20 py-10 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso1.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso2.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso3.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso5.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso4.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/paso6.jpeg"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
