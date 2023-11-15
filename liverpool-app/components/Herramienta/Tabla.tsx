export default function Tabla() {
  return (
    <>
      <div className="pb-10 px-20 bg-white">
        <h1 className="text-3xl font-bold tracking-tight text-pink-800">
          Tabla con los datos 
        </h1>
        <h1 className="pt-5 font-light text-gray-700 md:text-lg">
          Visualiza una muestra de tu nuevo excel con los resultados de la predicción. 
        </h1>
      </div>
      <div className="pb-20 px-20 bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-pink-900 uppercase bg-pink-50 dark:bg-pink-700 dark:text-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ubicación
                </th>
                <th scope="col" className="px-6 py-3">
                  Tienda
                </th>
                <th scope="col" className="px-6 py-3">
                  Edad
                </th>
                <th scope="col" className="px-6 py-3">
                  Area
                </th>
                <th scope="col" className="px-6 py-3">
                  Num de movimientos
                </th>
                <th scope="col" className="px-6 py-3">
                  Hijos
                </th>
                <th scope="col" className="px-6 py-3">
                  Estatus
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  Satelite
                </th>
                <td className="px-6 py-4">Liverpool</td>
                <td className="px-6 py-4">25</td>
                <td className="px-6 py-4">Cajera</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">Activo</td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  Galerias Tampico 
                </th>
                <td className="px-6 py-4">Suburbia</td>
                <td className="px-6 py-4">30</td>
                <td className="px-6 py-4">Gerente</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Renuncia</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  Sonora
                </th>
                <td className="px-6 py-4">Cedis</td>
                <td className="px-6 py-4">45</td>
                <td className="px-6 py-4">Cajera</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">Renuncia</td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  Tijuana
                </th>
                <td className="px-6 py-4">Suburbia</td>
                <td className="px-6 py-4">18</td>
                <td className="px-6 py-4">cajera</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">Renuncia</td>
              </tr>

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900  dark:text-white"
                >
                  Tuxpan Veracruz 
                </th>
                <td className="px-6 py-4">Liverpool</td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">cajera</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">renuncia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
