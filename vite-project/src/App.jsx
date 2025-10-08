import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PopupProvider } from "./context/PopupContext";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/About";
import { Membership } from "./pages/Membership";
import { Careers } from "./pages/Careers";
import { Blog } from "./pages/Blog";
import { Terms } from "./pages/Terms";
import { Rules } from "./pages/Rules";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
    <>
      <Router>
        <PopupProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/membership" element={<Membership />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </PopupProvider>
      </Router>
    </>
  );
}

export default App;
