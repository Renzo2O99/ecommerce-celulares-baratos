import { FaFacebook, FaGithub, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6"

export const BrandsNavbar = () => {
  return (
    <>
      <div className="flex mt-4 sm:mt-0">
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <FaFacebook />
          <span className="sr-only">Facebook page</span>
        </a>

        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <FaInstagram />
          <span className="sr-only">Instagram page</span>
        </a>

        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <FaTwitter />
          <span className="sr-only">Twitter page</span>
        </a>

        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <FaTiktok />
          <span className="sr-only">Tik Tok page</span>
        </a>

        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
          <FaGithub />
          <span className="sr-only">Github account</span>
        </a>
      </div>
    </>
  )
}