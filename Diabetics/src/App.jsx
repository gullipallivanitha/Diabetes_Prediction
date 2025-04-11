import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import InputPage from "./components/InputPage";
import ResultPage from "./components/ResultPage";
import PrecautionsPage from "./components/PrecautionsPage"; // Import the new page


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/input" element={<InputPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/precautions" element={<PrecautionsPage />} />

            </Routes>
        </Router>
    );
}

export default App;