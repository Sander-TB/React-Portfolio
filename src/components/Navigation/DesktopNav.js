import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import {
	FaGithub,
	FaLinkedin,
	FaTwitterSquare,
	FaInstagram,
} from "react-icons/fa";

export default function DesktopNav() {
	return (
		<header className='fixed'>
			<Link to='/' className=''>
				<img src={Logo} alt='logo' className='w-44  bg-black p-7' />
			</Link>
			<nav className='flex flex-col justify-center items-center bg-gray-darker w-44 text-gray-lightest py-10 font-sans font-thin tracking-wider text-lg'>
				<span className='h-0.5 w-full bg-gray mt-10'></span>
				<Link to='/' className='my-4'>
					Home
				</Link>
				<span className='h-0.5 w-full bg-gray mt-0'></span>
				<Link to='/about' className='my-4'>
					About
				</Link>
				<span className='h-0.5 w-full bg-gray mb-4'></span>
				<Link to='/portfolio'>Portfolio</Link>
				<span className='h-0.5 w-full bg-gray mt-4'></span>
				<Link to='/blog' className='mt-4'>
					Blog
				</Link>
				<span className='h-0.5 w-full bg-gray mt-4'></span>
				<Link to='/contact' className='mt-4'>
					Contact
				</Link>
				<span className='h-0.5 w-full bg-gray mt-4 mb-10'></span>
				<a
					href='https://www.instagram.com/sandertrolleboe/'
					target='_blank'
					rel='noreferrer'>
					<FaInstagram />
				</a>
				<a href='https://twitter.com/STrolleb' target='_blank' rel='noreferrer'>
					<FaTwitterSquare />
				</a>
				<a
					href='https://www.linkedin.com/in/sander-trolleboe-byrkjeland/'
					target='_blank'
					rel='noreferrer'>
					<FaLinkedin />
				</a>
				<a href='https://github.com/Sander-TB' target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
			</nav>
		</header>
	);
}
