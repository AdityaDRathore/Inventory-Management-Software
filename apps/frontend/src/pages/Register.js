import { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/auth/register", { name, email, password });
      console.log(response.data);
      // Redirect to login page after successful registration
      history.push("/login");
    } catch (error) {
      setError("Registration failed");
      console.error(error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <Heading mb={6}>Register</Heading>
      {error && <Text color="red.500" mb={4}>{error}</Text>}
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="teal" onClick={handleRegister}>Register</Button>
    </Box>
  );
};

export default Register;