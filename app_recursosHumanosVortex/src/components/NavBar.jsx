import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <Text fontSize='4xl' color='tomato' as="b"> Employees </Text>
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
