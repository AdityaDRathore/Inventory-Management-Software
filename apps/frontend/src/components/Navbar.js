import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-between">
      <Link as={RouterLink} to="/" color="white">Dashboard</Link>
      <Link as={RouterLink} to="/inventory" color="white">Inventory</Link>
      <Link as={RouterLink} to="/sales" color="white">Sales</Link>
      <Link as={RouterLink} to="/purchases" color="white">Purchases</Link>
    </Flex>
  </Box>
);

export default Navbar;