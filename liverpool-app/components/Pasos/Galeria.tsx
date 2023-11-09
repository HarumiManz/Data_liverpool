import Image from "next/image";

export default function Galeria() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-pink-700">
            ¡VIVE LA MEJOR EXPERIENCIA!
          </h1>
          <h2 className="text-2xl">Te guiamos paso a paso en el uso de la herramienta</h2>
        </div>
      </header>
      <div className="p-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img3.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img1.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img2.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img4.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img5.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img6.png"
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
