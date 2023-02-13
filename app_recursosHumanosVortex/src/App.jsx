import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import EmployeesListContainer from "./components/EmployeesListContainer";
import EmployeeDetail from "./screens/EmployeeDetail";
import EmployeeForm from "./screens/EmployeeForm";
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" element={<EmployeesListContainer />} />
           <Route path="/detail/:id" element={<EmployeeDetail />} />
           <Route path="/create-employee" element={<EmployeeForm />} />
           <Route path="/edit-employee/:id" element={<EmployeeForm />} />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
