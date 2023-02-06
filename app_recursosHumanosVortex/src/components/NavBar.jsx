import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <Text fontSize='4xl' color='tomato' as="b"> List of employees </Text>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
