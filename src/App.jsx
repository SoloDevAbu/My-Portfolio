import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div>
      <div className="hidden sm:flex w-1/4 bg-color-sidebarBackground">
        <Sidebar/>
      </div>
    </div>
  )
}