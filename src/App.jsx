import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
// import About from "./pages/About";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div className="hidden sm:flex w-1/4 h-screen bg-color-sidebarBackground justify-center">
        <Sidebar />
      </div>
      <div className="w-full h-full sm:w-3/4">
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  )
}