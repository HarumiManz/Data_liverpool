import Image from "next/image";

export default function Bienvenido() {
  return (
    <>
      <div>
        <div className="bg-pink-100 ">
          <div className="flex flex-row  place-content-center p-10 justify-items-center ">
            <div className="basis-2/3 place-items-center px-10 py-20">
              <h1 className="text-4xl font-bold text-gray-900">
                Bienvenido a nuestro sistema de predicción de analisis para
                Liverpool
              </h1>
              <h2 className="m-10 px-5">
                "Enfocados en preservar el talento, te invitamos a descubrir
                cómo podemos juntos cuidar y potenciar el talento de Liverpool.”
              </h2>
            </div>
            <div className="basis-1/3 justify-items-center px-5">
              <Image
                className="h-auto max-w-full  "
                src="/images/bolo1.png"
                alt="Logo tec "
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
