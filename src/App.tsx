import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import SelectedCountry from "./components/SelectedCountry"

function App() {

  return (
    <div className="h-screen flex flex-col items-center bg-[#fafafa] dark:bg-[#202c37]">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selected/:id" element={<SelectedCountry />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
