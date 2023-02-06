import { useSelector } from "react-redux";
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
import {  Link } from "react-router-dom";

const EmployeList = () => {
  const employes = useSelector((state) => state.employes);
  console.log(employes);
  return (
    <SimpleGrid
    spacing={6}
    templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {employes.map((empleado) => {
        return (
              <Card key={empleado.employe_id}>
                <CardHeader>
                  <Heading size="md">
                   Empleado: {empleado.first_name}, {empleado.last_name}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>{empleado.email} </Text>
                  <Text>{empleado.phone_number} </Text>
                  <Text>{empleado.hire_date}</Text>
                  <Text>{empleado.commission_pct}</Text>
                </CardBody>
                <CardFooter justifyContent="center">
                <Link to="/empleado/:id">
                  <Button>View here</Button>
                </Link>
                  <Button>Edit</Button>
                </CardFooter>
              </Card>
        );
      })}
    </SimpleGrid>
  );
};
export default EmployeList;
