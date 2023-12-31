import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-auto">
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <hr className="pb-10 border-gray-400" />
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-5">
            <div className="mb-6 md:mb-0 flex items-center justify-center text-center">
              <ul>
                <Image
                  className="mb-6 flex items-center justify-center"
                  src="/images/logoItesm.png"
                  alt="Logo tec "
                  width={200}
                  height={200}
                />
                <span className=" py-10 text-center text-m font-bold whitespace-nowrap dark:text-white">
                  ITESM
                </span>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
                Institución
              </h3>
              <ul className="text-gray-600 hover:underline dark:text-gray-400 text-center">
                <li className="mb-4">
                  <p>
                    Instituto Tecnológico de Estudios Superiores de Monterrey{" "}
                  </p>
                </li>
                <li className="mb-4">
                  <p>
                    Av Lago de Guadalupe KM 3.5, Margarita Maza de Juárez, 52926
                    Cd López Mateos, Méx.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
                Alumnos
              </h3>
              <ul className="text-center text-gray-600 hover:underline dark:text-gray-400">
                <li className="mb-4">
                  <p>Harumi Manzano </p>
                </li>
                <li className="mb-4">
                  <p>Jorge Rojas</p>
                </li>
                <li className="mb-4">
                  <p>Ana Rubio</p>
                </li>
                <li className="mb-4">
                  <p>Jaqueline Romero</p>
                </li>
                <li className="mb-4">
                  <p>Diego Corona</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" text-center mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Profesores
              </h3>
              <ul className="text-gray-600 hover:underline dark:text-gray-400 text-center">
                <li className="mb-4">
                  <p>Ma.Carmen Jiménez</p>
                </li>
                <li className="mb-4">
                  <p>Julio Arriaga</p>
                </li>
                <li className="mb-4">
                  <p>Gabriela Campos</p>
                </li>
                <li className="mb-4">
                  <p>Aram Baruch González</p>
                </li>
                <li className="mb-4">
                  <p>Jose Eslava</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-center">
                Socio Formador
              </h3>
              <ul>
                <li className="mb-4">
                  <h3 className="text-gray-600 hover:underline dark:text-gray-400 text-center">
                    Grupo Puerto Liverpool
                    </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between bg-white">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://tec.mx/es/estado-de-mexico"
              target="_blank"
              className="hover:underline "
            >
              Itesm
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 mx-10 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/HarumiManz/Data_liverpool"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
