export function TealButton({ content }) {
	return (
		<button className='text-teal relative font-light text-3xl tracking-widest border border-teal px-3 py-1 cursor-pointer z-50'>
			{content}
		</button>
	);
}

export function OrangeButton({ content }) {
	return (
		<button className='text-orange relative font-light text-3xl tracking-widest border border-orange px-3 py-1 cursor-pointer z-50'>
			{content}
		</button>
	);
}
