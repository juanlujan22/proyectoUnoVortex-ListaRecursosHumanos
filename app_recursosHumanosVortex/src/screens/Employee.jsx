import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteEmployee } from "../features/recursosHumanosSlice";
const Employee = ({ empl }) => {
  const dispatch = useDispatch()

  const handleDelete = (id)=>{
    console.log(id);
    dispatch(deleteEmployee(id))
  }
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">
            Name: {empl.first_name}, 
            Last name: {empl.last_name}
          </Heading>
        </CardHeader>
          <CardBody>
            <Text>{empl.email} </Text>
            <Text>{empl.phone_number} </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <Link to={`detail/${empl.employee_id}`}>
              <Button bg="aquamarine">View here</Button>
            </Link>
            
             <Button bg="orangered" onClick={()=>handleDelete(empl.employee_id)}>Delete</Button>
          
          </CardFooter>
        
      </Card>
    </>
  );
};
export default Employee;
