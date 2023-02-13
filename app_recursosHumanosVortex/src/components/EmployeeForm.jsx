import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addEmployee, editEmploye } from '../features/recursosHumanosSlice'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  Input, Button, VStack,HStack
} from '@chakra-ui/react'
const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    hire_date:"" ,
    salary:"",
    commission_pct: ""
  })
  const navigate = useNavigate()
  const params=useParams()
  
  const dispatch = useDispatch()
  const emplList = useSelector(state=>state.employes)

  useEffect(()=>{
    if (params.id){
      setEmployee(emplList.find(empl=>empl.employee_id === params.id))
    }
  },[])

  const handleChange= e =>{
    setEmployee({...employee, 
    [e.target.name] : e.target.value})
  }
  
  const handleSubmit= e =>{
    e.preventDefault()
    toastMessage()
    if(params.id){
      toastMessage()
      dispatch(editEmploye(employee))
    } else {
      toastMessage()
      dispatch(addEmployee(employee))
    }
    navigate("/")
  }
  const handleCancel=()=>{
    navigate("/")
  }
  const toastMessage=()=>{
    toast('employee was successfully added!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
    <>
    <VStack  p={7} justifyContent="center">
          <FormControl borderRadius={10} isRequired bgColor="lavender" border="solid blueviolet" p={40}>
            <form  onSubmit={handleSubmit}>
              <FormLabel mt={5}>Employee id</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.employee_id}
                name="employee_id"
              />
              <FormLabel mt={10}>First Name</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.first_name}
                name="first_name"
              />
              <FormLabel mt={10}>Last Name</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.last_name}
                name="last_name"
              />
              <FormLabel mt={10}>Email</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.email}
                name="email"
              />
              <FormLabel mt={10}>Phone Number</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.phone_number}
                name="phone_number"
              />
              <FormLabel mt={10}>Hire Date</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.hire_date}
                name="hire_date"
              />
              <FormLabel mt={10}>Salary</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.salary}
                name="salary"
              />
              <FormLabel mt={10}>Commission</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                value={employee.commission_pct}
                name="commission_pct"
              />
              <HStack mt={20}>
                <Button borderRadius={15} h={40} w={70} bg="blueviolet" type='submit' >Agregar</Button>
                <Button borderRadius={15} h={40} w={70} bg="yellow" onClick={handleCancel}> Salir</Button>
              </HStack>
              <HStack mt={20}>
                <ToastContainer />
              </HStack>
            </form>
          </FormControl>
        </VStack>
    </>
  )
}
export default EmployeeForm