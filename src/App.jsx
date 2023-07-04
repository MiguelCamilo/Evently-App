import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/newevent" element={<NewEvent />} />

				<Route path="/favorites" element={<Favorites />} />
			</Routes>
		</Layout>
	);
}

export default App;
