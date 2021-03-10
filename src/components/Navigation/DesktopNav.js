import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

export default function DesktopNav() {
	return (
		<>
			<div className=' bg-gray-darker h-20 flex justify-start items-center w-1/4'>
				<Link to='/' className=''>
					<img src={Logo} alt='logo' className='w-1/4 bg-black p-5' />
				</Link>
			</div>
		</>
	);
}
