export default function Objetivo() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white">
              Nosotros
            </h2>
            <p className="font-light text-gray-700 sm:text-xl dark:text-gray-800">
              Conoce un poco sobre nuestros objetivos y las ventajas para
              liverpool en la parte de empleados.{" "}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 py-10 bg-gradient-to-t from-pink-200 to-bg-pink-200 rounded-lg border border-gray-200 shadow-md">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Objetivo
              </h2>
              <p className="mb-5 font-light text-gray-700 dark:text-gray-400">
                Nuestro objetivo es anticipar las posibles renuncias de los
                empleados en la tienda "Liverpool" e identificar las
                características clave que pueden hacer que ciertos empleados
                sean más propensos a renunciar.
              </p>
              <div className="flex justify-between items-center"></div>
            </article>
            <article className="p-6 py-10 bg-gradient-to-t from-pink-200 to-bg-pink-200 rounded-lg border border-gray-200 shadow-md">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ventajas
              </h2>
              <p className="mb-5 font-light text-gray-700 dark:text-gray-400">
                Disminución en costos de capacitación y reclutamiento, pronta
                aplicación de estrategias para la mejora del ambiente
                laboral y evitar la demora en productividad
              </p>
              <div className="flex justify-between items-center"></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
