import { useMediaQuery } from "react-responsive";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Navigation() {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-device-width: 1224px)",
	});

	if (isDesktopOrLaptop) {
		return <DesktopNav />;
	} else {
		return <MobileNav />;
	}
}
