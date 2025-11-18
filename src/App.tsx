import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { ProjectDetail } from "./components/ProjectDetail";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}