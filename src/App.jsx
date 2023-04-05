import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDisplay from "./Pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
