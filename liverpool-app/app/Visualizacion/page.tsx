
import { Barra, Dispersion, BarraDoble, Pay, Lineal, DashBoard} from '@/components/Visualizacion';

import Image from "next/image";

export default function Visualizacion() {
    return (
        <header className="px-10 bg-white shadow">
          <div className="  px-4 py-6 sm:px-6 lg:px-8">
            <div className=''>
              <DashBoard/>
            </div>
          </div>
        </header>
      );
}