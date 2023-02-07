import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addEmployee } from '../features/recursosHumanosSlice'
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

  // dispatch para traer reducer addEmployee y actualizar el redux state
  const dispatch = useDispatch()


  // funciones handle de inputs del formulario
  const handleChange= e =>{
    setEmployee({...employee, 
    [e.target.name] : e.target.value})
  }
  
  // funcion handle que actualiza el store redux con dispatch
  const handleSubmit=e=>{
    e.preventDefault()
    dispatch(addEmployee(employee))
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="employee_id" id="" />
      <input onChange={handleChange} type="text" name="first_name" id="" />
      <input onChange={handleChange} type="text" name="last_name" id="" />
      <input onChange={handleChange} type="text" name="email" id="" />
      <input onChange={handleChange} type="text" name="phone_number" id="" />
      <input onChange={handleChange} type="text" name="hire_date" id="" />
      <input onChange={handleChange} type="text" name="salary" id="" />
      <input onChange={handleChange} type="text" name="commission_pct" id="" />
      <button type='submit'>submit</button>
    </form>
    </>
  )
}
export default EmployeeForm