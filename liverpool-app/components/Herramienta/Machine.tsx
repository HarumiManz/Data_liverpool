import Image from "next/image";

export default function Machine() {
  return (
    <>
      <section
        id="Machine"
        className="bg-gradient-to-r from-pink-300 via-white to-white"
      >
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            src="/images/img2.png"
            alt="analitica "
            width={700}
            height={700}
            className="px-10 rounded-full"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-pink-900 dark:text-white">
            ¡Anticípate a la rotación laboral y fortalece a tu equipo!

            </h2>
            <p className="mb-6 font-light text-gray-700 md:text-lg dark:text-gray-400">
              Utiliza nuestro modelo predictivo con una precisión del 98% donde
              podrás visualizar cuántos y qué empleados se encuentran más
              propensos a renunciar, recuerda que nuestro objetivo es disminuir
              la rotación laboral ¡Cuidando nuestro talento!
            </p>
            <a
              href="#Machine"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
