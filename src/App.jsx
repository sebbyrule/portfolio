import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postname" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}