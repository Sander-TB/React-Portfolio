export function Heading({ content }) {
	return (
		<h1 className='text-5xl font-medium tracking-wide text-teal'>{content}</h1>
	);
}

export function OrangeHeading({ content }) {
	return (
		<h1 className='text-3xl font-medium tracking-wide text-orange'>
			{content}
		</h1>
	);
}

export function BgHeading({ content }) {
	return (
		<h1 className='text-9xl font-medium tracking-wide text-black-light'>
			{content}
		</h1>
	);
}
