import { Text, Button, HStack, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div>
        <HStack spacing='24px' p={26} borderWidth='1px' bg="lavender" w="100vw" justifyContent="space-around" >
            <NavLink to="/">
              <Box>
                <img src="public/vite.svg" style={{height: "30px" }} alt={"logo"} />
              </Box>
            </NavLink>
            <NavLink to="/">
              <Text fontSize='4xl' color='black' as="b"> Employees </Text>
            </NavLink>
            <NavLink to={"/form"}>
                <Button bg="green" >Add Employee</Button>
            </NavLink>
          
        </HStack>
      </div>
    </nav>
  );
};
export default NavBar;
