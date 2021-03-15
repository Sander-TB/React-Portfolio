import Heading from "../components/layout/Heading";

export default function Portfolio() {
	return (
		<>
			<Heading content='Portfolio' />
			<div className='flex'>
				<img src='https://via.placeholder.com/300x200' alt='' />
				<div>
					<h3>Project Title</h3>
					<p>HTML | CSS | JavaScript</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
						ipsa?
					</p>
				</div>
			</div>
		</>
	);
}
