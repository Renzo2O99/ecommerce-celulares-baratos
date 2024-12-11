import { Button } from "flowbite-react"

export const Newsletter = () => {
  return (
    <div className="relative py-20 text-white bg-gray-500">
      {/* Background Image */}
      <div 
        style={{ backgroundImage: "url('/images/background-newsletter.webp')" }} 
        className="absolute inset-0 h-full bg-center bg-cover opacity-70" 
      />

      {/* Content */}
      <div className="container relative z-10 p-5 md:p-0">
        <div className="w-full text-black bg-white p-12 space-y-5 md:w-[50%] lg:w-[40%]">
          <p className="text-xs font-semibold uppercase">
            Suscríbete a nuestra newsletter y recibe ofertas exclusivas
          </p>

          <p className="text-xs font-medium w-[80%] leading-5">
            Introduzca su email para comenzar a recibir ofertas y descuentos exclusivos
          </p>

          <form action="" className="flex flex-col gap-5 xl:flex-row">
            <input type="email" className="px-5 py-3 w-full text-xs font-medium rounded-full border boder-slate-200 focus:outline-none" placeholder="Correo Electrónico" />

            <Button pill type="submit">Subscribirme</Button>
          </form>
        </div>
      </div>
    </div>
  )
}