import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/about";

function App() {
  return (
    <>
      <Router>
        <PopupProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </PopupProvider>
      </Router>
    </>
  );
}

export default App;
