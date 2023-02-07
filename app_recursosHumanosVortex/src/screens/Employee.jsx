import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Employee = ({ empl }) => {
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
            
             <Button bg="orangered">Delete</Button>
          
          </CardFooter>
        
      </Card>
    </>
  );
};
export default Employee;
