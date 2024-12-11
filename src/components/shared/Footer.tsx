import { useYearStore } from "../../store/useYearStore";
import { BrandsNavbar } from "./BrandsNavbar"
import { InputEmail } from "./InputEmailComponent/InputEmail"
import { Logo } from "./Logo"

export const Footer = () => {
  const year = useYearStore((state) => state.year);
  
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="px-5 py-6 lg:px-12 md:py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="col-span-full md:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <Logo />
            </a>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Encuentra los mejores teléfonos al mejor precio del mercado.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Newsletter</h2>
            <InputEmail label="¡Suscribete!" />
          </div>

          {/* Políticas Section */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Políticas</h2>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <a href="" className="font-medium text-gray-500 hover:text-gray-900 hover:underline dark:hover:text-white">Productos</a>
              </li>
              <li>
                <a href="" className="font-medium text-gray-500 hover:text-gray-900 hover:underline dark:hover:text-white">Políticas de Privacidad</a>
              </li>
              <li>
                <a href="" className="font-medium text-gray-500 hover:text-gray-900 hover:underline dark:hover:text-white">Términos de Servicio</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales Section */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Síguenos</h2>
            <div className="font-medium text-gray-500 dark:text-gray-400">
              <p className="mb-4">No te pierdas de todas nuestras novedades</p>
              <BrandsNavbar />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        
        {/* Copyright Section */}
        <div className="font-semibold md:flex md:items-center md:justify-between">
          <span className="block mb-4 text-sm text-gray-900 dark:text-gray-400 md:mb-0">
            &copy; {year} <a href="/" className="hover:underline">Teléfonos Baratos</a>.
            <br className="md:hidden" />
            <span className="md:mx-4">Todos los derechos reservados.</span>
          </span>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Términos
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}