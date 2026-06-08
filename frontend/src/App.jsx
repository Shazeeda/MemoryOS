import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Memories from "./pages/Memories.jsx";

function App() {
  return (
    <div>
      <nav>
        <h2>MemoryOS</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/memories">Memories</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </div>
  );
}

export default App;
