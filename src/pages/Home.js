import { Link } from "react-router-dom";
import Profile from "../images/profile.png";

export default function Home() {
	return (
		<div className='flex animation-area justify-evenly'>
			<main className='h-screen pt-10 ml-10'>
				<p
					aria-hidden='true'
					className='relative right-32 font-mono italic text-gray-light'>
					&lt;html&gt;
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative right-14 text-gray-light'>
					&lt;body&gt;
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative text-gray-light'>
					&lt;h1&gt;
				</p>
				<h1 className='text-white text-8xl ml-5 font-medium italic tracking-tight'>
					Hi, I'm Sander, <span className='block'> A Web Developer</span>
				</h1>
				<p
					aria-hidden='true'
					className='font-mono italic relative leading-3 text-gray-light'>
					&lt;/h1&gt;
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative text-gray-light'>
					&lt;p&gt;
				</p>
				<p className='font-mono text-gray-lightest'>
					And This is my portfolio page
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative text-gray-light'>
					&lt;/p&gt;
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative text-gray-light'>
					&lt;button&gt;
				</p>
				<button>
					<Link
						to='/about'
						className='text-teal font-light text-3xl tracking-widest border border-teal px-3 py-1 '>
						More about me
					</Link>
				</button>
				<p
					aria-hidden='true'
					className='font-mono italic relative text-gray-light'>
					&lt;/button&gt;
				</p>
				<p
					aria-hidden='true'
					className='font-mono italic relative right-14 text-gray-light'>
					&lt;/body&gt;
				</p>
				<p
					aria-hidden='true'
					className='relative right-32 font-mono italic text-gray-light'>
					&lt;/html&gt;
				</p>
			</main>
			<aside className='z-50 w-1/4 mt-24'>
				<img src={Profile} alt='The author: Sander Trollebø' />
			</aside>
		</div>
	);
}

// TODO: Have one bg shape of each color: blue and orange
