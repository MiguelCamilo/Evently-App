import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../context/favorite-context";

import EventList from "../components/EventList";

const Favorites = () => {
	const favoritesCtx = useContext(FavoritesContext);

	const NoLoadedDataWarning = () => {
		if (favoritesCtx.totalFavorites === 0) {
			return (
				<div className="flex flex-col justify-center items-center min-h-screen text-black font-bold text-xl">
					<label className="mb-5 text-center text-md sm:text-xl">
						You currently have no favorites, lets add some?
					</label>
					<Link
						to={"/"}
						className="group relative inline-block focus:outline-none focus:ring"
					>
						<span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-orange-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

						<span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
							View All Events
						</span>
					</Link>
				</div>
			);
		}
	};
	return (
		<>
        <h1 className="mb-5 text-center text-black font-bold text-md sm:text-xl">List of Favorites</h1>
			{favoritesCtx.totalFavorites === 0 ? (
				<NoLoadedDataWarning />
			) : (
				<EventList events={favoritesCtx.favorites} />
			)}
		</>
	);
};

export default Favorites;
