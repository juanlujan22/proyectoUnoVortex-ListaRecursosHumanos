import { useSelector} from "react-redux";
import Employee from "../screens/Employee";
import { SimpleGrid, VStack, Button, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const EmployeesListContainer = () => {
  const employees=useSelector(state=> state.employes)
  
  return (
    <> 
      <VStack mt={10}>
        <NavLink to={"/create-employee"}>
            <Button borderRadius={10} bg="blueviolet" w={100} p="20" m="20" >Add Employee</Button>
        </NavLink>
      </VStack>
     { employees.length===0 
      ?
      <Box display="flex" justifyContent="center">
        <h2> No Hay RRHH Disponibles </h2> 
      </Box>
      :
      <SimpleGrid 
          columns={3} spacingX='40px' spacingY='20px' textAlign='center'
          >
            {employees.map((empl) => {
              return <Employee key={empl.employee_id} empl={empl} />;
            })}
      </SimpleGrid>}
    </>
  );
};
export default EmployeesListContainer;
