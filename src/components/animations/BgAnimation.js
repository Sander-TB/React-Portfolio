import Triangle1 from "../../images/tri1.svg";
import Triangle2 from "../../images/tri2.svg";
import Triangle3 from "../../images/tri3.svg";
import Oval1 from "../../images/oval1.svg";
import Oval2 from "../../images/oval2.svg";
import Oval3 from "../../images/oval3.svg";
import Rectangle1 from "../../images/rect1.svg";
import Rectangle2 from "../../images/rect2.svg";
import Rectangle3 from "../../images/rect3.svg";

export default function BgAnimation() {
	return (
		<div className='svg-area z-10' aria-hidden='true'>
			<img
				src={Triangle1}
				alt='1'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Oval1}
				alt='2'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Rectangle1}
				alt='3'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Triangle2}
				alt='4'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Oval2}
				alt='5'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Rectangle2}
				alt='6'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Triangle3}
				alt='7'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Oval3}
				alt='8'
				aria-hidden='true'
				className='svg-animation z-10'
			/>

			<img
				src={Rectangle3}
				alt='9'
				aria-hidden='true'
				className='svg-animation z-10'
			/>
			<img
				src={Oval1}
				alt='10'
				aria-hidden='true'
				className='svg-animation z-10'
			/>
			<img
				src={Triangle1}
				alt='11'
				aria-hidden='true'
				className='svg-animation z-10'
			/>
		</div>
	);
}
