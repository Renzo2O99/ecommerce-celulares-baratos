import { Link } from "react-router-dom"
import { useYearStore } from "../../store/useYearStore";

export const Banner = () => {
  const year = useYearStore((state) => state.year);

  return (
    <div className="relative text-white bg-gray-900">

      {/* Background Image */}
      <div 
        style={{ backgroundImage: "url('/images/img-banner.jpg')" }} 
        className="absolute inset-0 h-full bg-center bg-cover opacity-70" 
      />
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="flex relative z-10 flex-col justify-center items-center px-4 py-20 text-center lg:py-40 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold lg:text-6xl">
          Los mejores teléfonos del {year}
        </h1>

        <p className="mb-8 text-lg lg:text-2xl">
          Recibe ofertas exclusivas y entérate de nuestras últimas novedades
        </p>

        <Link to={"/telefonos"} className="px-6 py-3 font-semibold text-white bg-gray-900 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-950">
          Ver Teléfonos
        </Link>
      </div>
    </div>

  )
}