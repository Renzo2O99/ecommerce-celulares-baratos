export const AboutPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="mb-5 text-4xl font-semibold tracking-tight text-center">
        Nuestra empresa
      </h1>

      <img className="w-full h-[500px] object-cover" src="/images/pages/background-about-page.png" alt="Imagen de Fondo" />

      <div className="flex flex-col gap-4 text-sm font-medium tracking-tighter leading-7 text-slate-800">
        <p>
          TelefonosBaratos es una tienda en línea que se especializa en la venta de teléfonos y tuvo su origen en el 2019. Nuestro principal objetivo consiste en ofrecer a todos nuestros clientes la mejor calidad y precio en teléfonos y accesorios a través de nuestro equipo de expertos, quienes se encargarán de ayudarle a solucionar cualquier consulta que pueda tener. 
        </p>

        <p>
          En TelefonosBaratos podrás encontrar una amplia variedad de teléfonos de las marcas más conocidas del mercado, además de contar con las mejores promociones y descuentos exclusivos para nuestros clientes registrados con la finalidad de que puedas comprarte el teléfono de tus sueños a un precio inigualable.
        </p>

        <h2 className="mt-8 mb-4 text-3xl font-semibold tracking-tight">
          ¡No esperes más! Comienza tu compra ahora.
        </h2>

        <p>
          Para más información, puedes contactarnos a traves de nuestros canales de contacto.

          <a href="email:correoprueba@telefonosbaratos.com">correoprueba@telefonosbaratos.com</a> o llamando al <a href="tel:123456789">123456789</a>
        </p>
      </div>
    </div>
  )
}