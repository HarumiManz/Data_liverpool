import Image from "next/image";

export default function Inicio() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Adentrate en Nuestra Página Web{" "}
          </h2>

          <p className="mt-4 text-gray-500">
            Conoce y navega por nuestra página web, hecha con el fin de
            facilitar el analisis de datos y predicción de renuncias de la
            empresa Liverpool.
          </p>
          <p className="mt-4 text-gray-500">
            {" "}
            Navega por cada una de nuestras pestañas y descubre todos los
            beneficios de nuestro sistema
          </p>
          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Inicio</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {" "}
                Conocenos que hacemos como ingenieros en analitica de datos y el
                proceso que llevamos a cabo para la preparacion de datos.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Pasos</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Nosotros te proporcionamos un manual de los pasos a seguir para
                poder usar nuestra herramienta de predicción, con el fin que tu
                experiencia sea de las mejores.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Herramienta</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Usa nuestra herrmienta de prediccion de renuncias de liverpool,
                donde con nuestro modelo facil y rapido de usar.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Visualización </dt>
              <dd className="mt-2 text-sm text-gray-500">
                Para ayudarte a hacer un mejor analisis descriptivo te
                proporcionamos visualizaciones de diferentes tipos con tus datos
                ingresados en la herramienta.
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Chat </dt>
              <dd className="mt-2 text-sm text-gray-500">
                No dudes en hacer tus preguntas en el chat, en donde podras
                completar tu experiencia.{" "}
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="/images/analitica.jpg"
            alt="analitica "
            width={400}
            height={400}
          />
          <Image
            src="/images/herramienta.jpg"
            alt="analitica "
            width={400}
            height={400}
          />
          <Image
            src="/images/visualizaciones.jpg"
            alt="analitica "
            width={400}
            height={400}
          />
          <Image
            src="/images/chat.jpg"
            alt="analitica "
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
