import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesContextProvider } from "./context/favorite-context.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // all components are have access to functions inside of the provider
	<FavoritesContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</FavoritesContextProvider>
);
