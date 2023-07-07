import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import FavoritesContext from "../context/favorite-context";

const EventItem = ({ id, title, image, address, description }) => {
	const favoritesCtx = useContext(FavoritesContext) // giving access to the context object
	const itemIsFavorite = favoritesCtx.itemIsFavorite(id) // passing the id back to the func

	const toggleFavoriteEvents = () => {
		if(itemIsFavorite) {
			favoritesCtx.removeFavorite(id)
		} else { 
			favoritesCtx.addFavorite({ id, title, image, address, description }) // sends an event to favorited
		}
	}
	return (
		<div className="bg-white p-8 mb-5 lg:w-1/4 md:w-1/2 relative">
			<div className="h-full flex flex-col items-center text-center ">
				<img
					alt="team"
					className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
					src={image}
				/>
				<div className="w-full">
					<h2 className="title-font font-bold text-xl text-black">{title}</h2>
					<address className="text-gray-500 mb-3">{address}</address>
					<p className="mb-4">{description}</p>
					<span className="inline-flex absolute top-2 right-2">
						<button onClick={toggleFavoriteEvents}>
							{itemIsFavorite 
								? <FontAwesomeIcon icon={SolidHeart} size="xl" className="text-red-600 hover:text-red-500 cursor-pointer" />								
								: <FontAwesomeIcon icon={faHeart} size="xl" className="text-red-600 hover:text-red-500 cursor-pointer" />
							}
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default EventItem;
