import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addEmployee, editEmploye } from '../features/recursosHumanosSlice'
import { useNavigate } from 'react-router-dom'
const EmployeeForm = () => {
  //estado react inicial del componente. 
  
  const [employee, setEmployee] = useState({
    employee_id: "",
    first_name: "  ",
    last_name: "",
    email: "",
    phone_number: "",
    hire_date:"" ,
    salary:"",
    commission_pct: ""
  })
  const navigate = useNavigate()
  const params=useParams()
  
  // dispatch para traer reducer addEmployee y actualizar el redux state
  const dispatch = useDispatch()
  const emplList = useSelector(state=>state.employes)

  // funciones handle de inputs del formulario
  const handleChange= e =>{
    setEmployee({...employee, 
    [e.target.name] : e.target.value})
  }
  
  // funcion handle que actualiza el store redux con dispatch
  // modo edicion si ingreso al form y hay params.id
  // modo creacion si no hay id
  const handleSubmit= e =>{
    e.preventDefault()
    if(params.id){
      console.log("dispatch de editEmploye")
      dispatch(editEmploye(employee))
    } else {
      dispatch(addEmployee(employee))
    }
    navigate("/")
  }
  useEffect(()=>{
    if (params.id){
      console.log("effect que trae y busca empleado del id del params")
      //seteo el estado, con el objeto encontrado
      setEmployee(emplList.find(empl=>empl.employee_id === params.id))
      console.log("setea el estado react, con empleado encontrado por id "+emplList)
    }
  },[])
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={employee.employee_id} name="employee_id" id="" />
      <input onChange={handleChange} type="text" value={employee.first_name} name="first_name" id="" />
      <input onChange={handleChange} type="text" value={employee.last_name} name="last_name" id="" />
      <input onChange={handleChange} type="text" value={employee.email} name="email" id="" />
      <input onChange={handleChange} type="text" value={employee.phone_number} name="phone_number" id="" />
      <input onChange={handleChange} type="text" value={employee.hire_date} name="hire_date" id="" />
      <input onChange={handleChange} type="text" value={employee.salary} name="salary" id="" />
      <input onChange={handleChange} type="text" value={employee.commission_pct} name="commission_pct" id="" />
      <button type='submit'>submit</button>
    </form>
    </>
  )
}
export default EmployeeForm