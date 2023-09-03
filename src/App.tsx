import { Navigate, Route, Routes } from "react-router-dom";
import AccommodationPage from "./pages/AccommodationPage";
import OwnerFormPage from "./pages/OwnerFormPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
	return (
		<div className="mx-auto mt-6 max-w-md sm:mt-4">
			<Routes>
				<Route>
					<Route path="/" element={<AccommodationPage />} />
					<Route path="/owner" element={<OwnerFormPage />} />
					<Route path="/summary" element={<SummaryPage />} />
					<Route path="*" element={<Navigate replace to="/" />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
