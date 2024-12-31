import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/NewSkills'));
const Contact = lazy(() => import('./pages/Contact'));
// import About from "./pages/About";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <div className="hidden sm:flex w-1/4 h-screen justify-center bg-dots-pattern" style={{ backgroundSize: '8px 8px' }}>
          <Sidebar/>
        </div>
        <div className="w-full h-screen sm:w-3/4 bg-dots-pattern" style={{ backgroundSize: '20px 20px' }} >
          <Suspense fallback={'Loading...'}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  )
}