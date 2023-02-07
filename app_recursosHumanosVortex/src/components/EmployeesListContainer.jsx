import { useSelector } from "react-redux";
import Employee from "../screens/Employee";
import { SimpleGrid } from "@chakra-ui/react";

const EmployeesListContainer = () => {
  const employees = useSelector((state) => state.employes);
  
  return (
    <SimpleGrid
      spacing={6}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {employees.map((empl) => {
        return <Employee key={empl.employee_id} empl={empl} />;
      })}
    </SimpleGrid>
  );
};
export default EmployeesListContainer;
