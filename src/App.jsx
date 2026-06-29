import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/AddHabit";
import Insights from "./pages/Insights";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// CSS
import "./styles/global.css";
import "./components/Navbar.css";
import "./components/HeatMap.css";

import "./pages/Home.css";
import "./pages/Dashboard.css";
import "./pages/AddHabit.css";
import "./pages/Insights.css";
import "./pages/About.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddHabit />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;