import { Link, NavLink } from 'react-router-dom';
import { navbarLinks } from '../../constants/links';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { Logo } from './Logo';


export const Navbar = () => {
	return (
		<header className='flex justify-between items-center px-5 py-4 text-black bg-white border-b border-slate-200 lg:px-12'>

      <Logo />

			<nav className='hidden space-x-5 md:flex'>
				{navbarLinks.map(link => (
					<NavLink
						key={link.id} to={link.href}
						className={({ isActive }) => `${isActive ? 'text-cyan-600 underline' : ''} transition-all duration-300 font-medium hover:text-cyan-600 hover:underline `}>
						{link.title}
					</NavLink>
				))}
			</nav>

      <div className="flex gap-5 items-center">
        <button className='p-2 rounded-full transition-all duration-200 hover:bg-slate-200'>
          <HiOutlineSearch size={25} />
        </button>

        <div className="relative">
          <Link to="/account" className="grid place-items-center w-9 h-9 text-lg font-bold rounded-full border-2 transition-all duration-200 border-slate-700 hover:bg-slate-200">
            R
          </Link> 
        </div>

        <button className="relative p-2 rounded-full transition-all duration-200 hover:bg-slate-200">
          <span className='absolute -right-2 place-items-center w-5 h-5 text-xs text-white bg-black rounded-full -button-2'>
            0
          </span>

          <HiOutlineShoppingBag size={25} />
        </button>
      </div>

      <button className="p-2 rounded-full transition-all duration-200 md:hidden hover:bg-slate-200">
        <FaBarsStaggered />
      </button>
		</header>
	);
};