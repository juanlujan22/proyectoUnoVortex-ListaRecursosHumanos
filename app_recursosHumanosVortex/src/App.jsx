import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmployeList from "./components/EmployeList";
import EmployeDetail from "./components/EmployeDetail";
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" element={<EmployeList />} />
           <Route path="/empleado/:id" element={<EmployeDetail />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
