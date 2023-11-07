export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600">
      <div className="flex items-center">
        <div className="ml-20 max-w-4xl px-1 lg:px-1">
          <img
            src="https://assetspwa.liverpool.com.mx/assets/images/logos/liverpool-logo.svg"
            className="w-40"
            alt="Liverpool Logo"
            title="Liverpool Logo"
          />
        </div>
        <div className="group block ml-auto">
          <div className="mr-20 flex space-x-6 h-20 items-center bg-center justify-between">
            <a
              href="/"
              className="text-white hover:bg-pink-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              Inicio
            </a>
            <a
              href="Pasos"
              className="text-white hover:bg-pink-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Pasos
            </a>
            <a
              href="Herramienta"
              className="text-white hover:bg-pink-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Herramienta
            </a>
            <a
              href="Visualizacion"
              className="text-white hover:bg-pink-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Visualización
            </a>
            <a
              href="ChatIA"
              className="text-white hover:bg-pink-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Chat
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
