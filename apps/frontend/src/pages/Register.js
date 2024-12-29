import { useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import FormInput from "../components/Form";

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
      <FormInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="teal" onClick={handleRegister}>Register</Button>
    </Box>
  );
};

export default Register;