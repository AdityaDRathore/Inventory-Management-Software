import { useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import FormInput from "../components/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log(response.data);
      // Save the token and redirect to the dashboard
      localStorage.setItem("token", response.data.token);
      history.push("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <Heading mb={6}>Login</Heading>
      {error && <Text color="red.500" mb={4}>{error}</Text>}
      <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;