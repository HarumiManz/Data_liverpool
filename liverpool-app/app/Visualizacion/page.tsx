
import { Barra, Dispersion, BarraDoble, Pay, Lineal } from '@/components/Visualizacion';

import Image from "next/image";

export default function Visualizacion() {
    return (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Visualización
            </h1>
            <div className='p-10'>
              <Barra/>
              <Dispersion/>
              <BarraDoble/>
              <Pay/>
              <Lineal/>
            </div>
          </div>
          <Image
        src="/images/bolo1.png"
        alt="analitica "
        width={300}
        height={300}
        className="px-10"
      />
        </header>
      );
}