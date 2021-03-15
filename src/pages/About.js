import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Heading } from "../components/layout/Headings";
import { OrangeButton } from "../components/layout/Buttons";
import { FaHtml5, FaCss3Alt, FaSass, FaFigma, FaGithub } from "react-icons/fa";
import {
	SiJavascript,
	SiTypescript,
	SiNodeDotJs,
	SiMongodb,
	SiReact,
	SiAdobecreativecloud,
	SiTailwindcss,
} from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";

// TODO: add html tags around elements on the page

export default function About() {
	return (
		<>
			<Heading content='About me' />
			<section className='md:flex h-screen'>
				<main className='flex flex-col w-2/3'>
					<p className='text-gray-lightest font-mono pb-3 w-ch'>
						I study Front-End Development at Noroff - School of Technology and
						Digital Media.
					</p>
					<p className='text-gray-lightest font-mono pb-3 w-ch'>
						I love to learn new things and figuring out how things work, and I
						often tend to get lost in my work.
					</p>
					<p className='text-gray-lightest font-mono w-ch'>
						My favorite hobbies at the moment are tech and electronics, as well
						as reading and playing the bass.
					</p>
					<div>
						<h2 className='text-white text-3xl mt-10'>Technologies I use:</h2>
						<div className='text-white text-4xl'>
							<FaHtml5 className='inline' />
							<FaCss3Alt className='inline' />
							<FaSass className='inline' />
							<SiTailwindcss className='inline' />
							<SiJavascript className='inline' />
							<SiTypescript className='inline' />
							<FaGithub className='inline' />
							<FaFigma className='inline' />
							<SiAdobecreativecloud className='inline' />
							<SiReact className='inline' />
							<SiNodeDotJs className='inline' />
							<SiMongodb className='inline' />
							<BsTerminalFill className='inline' />
						</div>
					</div>
				</main>
				<aside>
					<h2 className='text-teal text-3xl'>Projects I like to work on:</h2>
					<div className='text-white text-xl'>
						<Typewriter
							options={{
								strings: [
									"- Responsive web design",
									"- Native apps",
									"- Authentication",
									"- Data fetching",
									"- Accessible web solutions",
									"- Raspberry Pi projects",
									"- Retro electronics restorations",
									"- Anything that will challenge me as a developer",
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<Link to='/contact'>
						<OrangeButton content='Get in touch' />
					</Link>
				</aside>
			</section>
		</>
	);
}
