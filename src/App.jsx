import { Route, Routes } from "react-router-dom";

import AllEvents from "./pages/AllEvents";
import NewEvent from "./pages/NewEvent";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<AllEvents />} />

				<Route path="/newevent" element={<NewEvent />} />

				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</Layout>
	);
}

export default App;
