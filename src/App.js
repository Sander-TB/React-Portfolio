import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
	return (
		<div className='bg-gray'>
			<Router>
				{/*If mobile display mobile nav, else display navigation*/}
				<Navigation />

				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/about' exact>
						<About />
					</Route>
					<Route path='/portfolio' exact>
						<Portfolio />
					</Route>
					<Route path='/blog' exact>
						<Blog />
					</Route>
					<Route path='/contact' exact>
						<Contact />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
