import axios from "axios";
import { useState, useEffect } from "react";

// import { DUMMY_DATA } from "../data/dummy-data";
import { db_env } from "../db.env.config";
import LoadingAnimation from "../components/layout/LoadingAnimation";
import EventList from "../components/EventList";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true); // start in a loading state
	const [loadedEvents, setLoadedEvents] = useState([]);

	useEffect(() => {
		axios
			.get(db_env.database_api)
			.then((response) => {
				const events = [];				
				
				for (const key in response.data) {
					// going through every key in firebase and creating an event
					const event = {
						id: key, // the id will be the key that firebase provides
						...response.data[key].eventData,
					};
					events.push(event);
				}
				setIsLoading(false)
				setLoadedEvents(events);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// console.log(loadedEvents)

	if(isLoading) return <LoadingAnimation />;

	return (
		<>
			<h1 className="text-xl text-black font-bold">All Events</h1>
			<EventList events={loadedEvents} />
		</>
	);
};

export default Home;
