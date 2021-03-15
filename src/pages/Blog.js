import Heading from "../components/layout/Heading";

export default function Blog() {
	return (
		<>
			<Heading content='Blog' />
			<div className='flex'>
				<main>
					<h1>Post title</h1>
					<p>Date</p>
					<p>Blurb</p>
					<button>Read More</button>
				</main>
				<aside>
					<h3>Tags:</h3>
				</aside>
			</div>
		</>
	);
}
