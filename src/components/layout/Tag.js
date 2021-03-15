export default function Tag({ content }) {
	return (
		<button className='text-teal relative font-light text-sm tracking-widest border border-teal rounded-full px-3 py-1 cursor-pointer z-50'>
			{content}
		</button>
	);
}
