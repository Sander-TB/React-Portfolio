import { Link } from "react-router-dom";
import Triangle from "../images/triangle.svg";
import Oval from "../images/oval.svg";
import Rectangle from "../images/rect2.svg";
import Profile from "../images/profile.png";

export default function Home() {
	return (
		<div className='flex animation-area'>
			<main className='h-screen'>
				<p aria-hidden='true'>&lt;html&gt;</p>
				<p aria-hidden='true'>&lt;body&gt;</p>
				<p aria-hidden='true'>&lt;h1&gt;</p>
				<h1 className='text-white text-8xl font-medium italic'>
					Hi, I'm Sander, <span className='block'> A Web Developer</span>
				</h1>
				<p aria-hidden='true'>&lt;/h1&gt;</p>
				<p aria-hidden='true'>&lt;p&gt;</p>
				<p className='font-mono text-gray-lightest'>
					And This is my portfolio page
				</p>
				<p aria-hidden='true'>&lt;/p&gt;</p>
				<p aria-hidden='true'>&lt;button&gt;</p>
				<button>
					<Link
						to='/about'
						className='text-teal font-light tracking-widest border border-teal px-3 py-1 '>
						More about me
					</Link>
				</button>
				<p aria-hidden='true'>&lt;/button&gt;</p>
				<p aria-hidden='true'>&lt;/body&gt;</p>
				<p aria-hidden='true'>&lt;/html&gt;</p>
				<div className='svg-area'>
					<img
						src={Triangle}
						alt='1'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Oval}
						alt='2'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Rectangle}
						alt='3'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Triangle}
						alt='4'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Oval}
						alt='5'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Rectangle}
						alt='6'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Triangle}
						alt='7'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Oval}
						alt='8'
						aria-hidden='true'
						className='svg-animation z-10'
					/>

					<img
						src={Rectangle}
						alt='9'
						aria-hidden='true'
						className='svg-animation z-10'
					/>
					<img
						src={Oval}
						alt='10'
						aria-hidden='true'
						className='svg-animation z-10'
					/>
					<img
						src={Triangle}
						alt='11'
						aria-hidden='true'
						className='svg-animation z-10'
					/>
				</div>
			</main>
			<aside className='z-50'>
				<img src={Profile} alt='The author: Sander Trollebø' />
			</aside>
		</div>
	);
}
