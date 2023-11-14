import Image from "next/image";

export default function Inicio() {
  return (
    <section id="inicio">
      <div className="bg-white py-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-pink-700 sm:text-4xl">
              Súmate al cambio ¡Cuidemos nuestro talento!
            </h2>

            <p className="mt-4 font-light text-xl text-gray-700">
              Esta plataforma esta creada especialmente para ti, navega a través
              de las diferentes secciones para conocer y prevenir la rotación de
              empleados a tu cargo, conocer el contexto de tu entorno laboral y
              crear estrategias con ayuda de la inteligencia artificial.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-pink-900">Inicio</dt>
                <dd className="mt-2 font-light text-sm text-gray-600">
                  {" "}
                  Te invitamos a conocer el objetivo de nuestra plataforma y
                  sumarte a formar parte del cambio.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-pink-900">Pasos</dt>
                <dd className="mt-2 font-light text-sm text-gray-600">
                  Te ayudamos a tener la mejor experiencia dentro de la
                  plataforma, guiándote paso a paso para obtener la mejor
                  experiencia posible.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-pink-900">Herramienta</dt>
                <dd className="mt-2 font-light text-sm text-gray-600">
                  Sube el excel que generaste siguiendo el paso a paso de la
                  plataforma y con un solo click recibe las posibles renuncias
                  del grupo a evaluar.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-pink-900">Visualización </dt>
                <dd className="mt-2 font-light text-sm text-gray-600">
                  Conoce el contexto al que estarás expuesto mediante el
                  análisis visual de los datos obtenidos a partir de las
                  predicciones generadas.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-pink-900">Chat </dt>
                <dd className="mt-2 font-light text-sm text-gray-600">
                  Aprovecha el plus de la plataforma y utiliza el Chat de IA
                  para generar estrategias de retención de empleados basadas en
                  tus propias necesidades.
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="/images/img3.png"
              alt="analitica "
              width={400}
              height={400}
            />
            <Image
              src="/images/img4.png"
              alt="analitica "
              width={400}
              height={400}
            />
            <Image
              src="/images/img5.png"
              alt="analitica "
              width={400}
              height={400}
            />
            <Image
              src="/images/img6.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
