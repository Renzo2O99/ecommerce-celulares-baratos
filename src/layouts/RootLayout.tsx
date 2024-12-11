import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"
import { Footer } from "../components/shared/Footer"
import { Banner, Newsletter } from "../components/home";

export const RootLayout = () => {
  const { pathname } = useLocation();
  
  return (
    <>
      <div className="flex flex-col h-screen font-montserrat">
        <Navbar />

        {pathname === "/" && <Banner />}

        <main className="container flex-1 px-4 mx-auto my-8 max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </main>

        {pathname === "/" && <Newsletter />}

        <Footer />
      </div>
    </>
  )
}