import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="p-4 shadow-md bg-white flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="space-x-4">
            <Link to="/portfolio" className="hover:text-blue-500">Profile</Link>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/portfolio" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postname" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}