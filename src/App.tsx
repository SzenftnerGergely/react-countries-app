import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import SelectedCountry from "./pages/SelectedCountry"

function App() {

  return (
    <div className="h-screen bg-[#fafafa] dark:bg-[#202c37] relative">
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
