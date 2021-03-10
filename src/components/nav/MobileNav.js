import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Logo from "../../images/logo.svg";
import "../../css/Navbar.css";

export default function Navigation() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Link className='w-full flex justify-center' to='/'>
				<img src={Logo} alt='logo' className='' />
			</Link>
			<div className=' bg-gray-darker h-20 flex justify-start items-center w-1/4'>
				<Link to='/' className='ml-8 text-4xl bg-none'>
					<BiMenuAltLeft onClick={showSidebar} className='text-teal' />
				</Link>
			</div>
			<nav
				className={
					sidebar ? "nav-menu active bg-gray-darker" : "nav-menu bg-gray-darker"
				}>
				<ul className='w-full' onClick={showSidebar}>
					<li className=' h-20 bg-gray-darker flex justify-start items-center'>
						<Link to='/' className='ml-8 text-4xl bg-none'>
							<AiOutlineClose className='text-teal' />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li
								key={index}
								className='text-gray-lightest flex justify-start items-start py-8 pl-16 h-16 transition duration-500 ease-in-out hover:text-white transform hover:scale-110'>
								<Link to={item.path}>
									<span className='ml-6'>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
