import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/newmeetup",
			element: <NewMeetup />,
		},
		{
			path: "/favorites",
			element: <Favorites />,
		},
	]);
	return (
		<>
			<RouterProvider router={router}>
				<MainNavigation />
			</RouterProvider>
		</>
	);
}

export default App;
