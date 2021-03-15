import {
	Heading,
	OrangeHeading,
	BgHeading,
} from "../components/layout/Headings";
import { TealButton } from "../components/layout/Buttons";
import Tag from "../components/layout/Tag";

export default function Blog() {
	return (
		<>
			<BgHeading content='Blog' />
			<Heading content='Blog' />
			<div className='flex'>
				<main>
					<OrangeHeading content='Post title' />
					<p>Date</p>
					<p>Blurb</p>
					<TealButton content='Read more' />
				</main>
				<aside>
					<h3>Tags:</h3>
					<Tag content='Front-End' />
				</aside>
			</div>
		</>
	);
}
