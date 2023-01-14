
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;