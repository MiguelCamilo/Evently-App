import { Link } from "react-router-dom";

const MainNavigation = () => {
	return (
		<div className="navbar bg-orange-300">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					{/* dropdown menu */}
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-300 rounded-box w-52"
					>
						<li>
						<Link to={"/"} className="text-white text-md hover:font-bold hover:text-white hover:bg-transparent">All Events</Link>
					</li>
					<li>
						<Link to={"favorites"} className="text-white text-md hover:font-bold hover:text-white hover:bg-transparent">My Favorites</Link>
					</li>
					</ul>
				</div>
				<Link to={"/"} className="text-white uppercase font-bold cursor-pointer text-xl">Evently</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to={"/"} className="text-white text-md hover:font-bold hover:text-white hover:bg-transparent">All Events</Link>
					</li>
					<li>
						<Link to={"favorites"} className="text-white text-md hover:font-bold hover:text-white hover:bg-transparent">My Favorites</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<Link to={"/newevent"} className="p-2 bg-white rounded-md text-orange-300 text-center hover:shadow-lg w-full lg:w-[30%]">Add New Event</Link>
			</div>
		</div>
	);
};

export default MainNavigation;
