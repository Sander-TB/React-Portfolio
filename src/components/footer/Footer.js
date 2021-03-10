import {
	FaGithub,
	FaLinkedin,
	FaTwitterSquare,
	FaInstagram,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
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
		</footer>
	);
}
