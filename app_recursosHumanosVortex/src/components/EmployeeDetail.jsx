import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const EmployeeDetail = () => {
  const {id}=useParams()
  const employe = useSelector(store=>store.employes)
  console.log(id)
  console.log(employe)

  const findEmpl = employe.find(empl=>empl.employee_id == id)
  
  const {first_name, last_name, phone_number, email, hire_date, salary, commission_pct, employee_id  } = findEmpl
  return (
    <div>
      <Card alignItems="center">
        <CardHeader>
          <Heading size="md">
            Name: {first_name}, 
            Last name: {last_name}
          </Heading>
        </CardHeader>
          <CardBody>
            <Text> salary: {salary}</Text>
            <Text> commission: {commission_pct}</Text>
            <Text> hire date:{hire_date}</Text>
            <Text> phone: {phone_number} </Text>
            <Text> email: {email} </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <Button>Edit</Button>        
          </CardFooter>
       </Card> 
    </div>
  )
}
export default EmployeeDetail