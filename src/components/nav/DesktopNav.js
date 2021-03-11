import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

export default function DesktopNav() {
	return (
		<header className='flex flex-row w-full z-50'>
			<NavLink exact={true} to='/' className='focus:outline-none'>
				<img src={Logo} alt='logo' className='w-44  bg-black p-7' />
			</NavLink>
			<nav className='flex items-center justify-evenly bg-gray-darker w-full text-gray-lightest font-sans font-thin tracking-wider text-lg'>
				<NavLink
					exact={true}
					activeClassName='text-teal'
					to='/'
					className='transition transform duration-500 ease-in-out hover:text-white hover:scale-105 cursor-pointer'>
					Home
				</NavLink>
				<NavLink
					activeClassName='text-teal'
					to='/about'
					className=' transition transform duration-500 ease-in-out hover:text-white hover:scale-105'>
					About
				</NavLink>
				<NavLink
					activeClassName='text-teal'
					to='/portfolio'
					className=' transition transform duration-500 ease-in-out hover:text-white hover:scale-105'>
					Portfolio
				</NavLink>
				<NavLink
					activeClassName='text-teal'
					to='/blog'
					className=' transition transform duration-500 ease-in-out hover:text-white hover:scale-105'>
					Blog
				</NavLink>
				<NavLink
					activeClassName='text-teal'
					to='/contact'
					className=' transition duration-300 ease-in-out hover:text-white hover:scale-105'>
					Contact
				</NavLink>
			</nav>
		</header>
	);
}
