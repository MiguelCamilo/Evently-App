import { DUMMY_DATA } from "../data/dummy-data";
import EventList from "../components/EventList";

const Home = () => {
	return (
		<>
			<h1 className="text-xl text-black font-bold">All Events</h1>
			<EventList events={DUMMY_DATA} />
		</>
	);
};

export default Home;
