import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
