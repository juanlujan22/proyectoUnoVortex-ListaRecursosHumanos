import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmployeesListContainer from "./components/EmployeesListContainer";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeForm from "./components/EmployeeForm";
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" element={<EmployeesListContainer />} />
           <Route path="detail/:id" element={<EmployeeDetail />} />
           <Route path="/form" element={<EmployeeForm />} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
