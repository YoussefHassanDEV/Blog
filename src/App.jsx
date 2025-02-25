import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostWrapper from "./pages/PostWrapper";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-2xl font-extrabold tracking-wide">My Blog</Link>
        </div>
      </nav>
      <div className="py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostWrapper />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
