import { SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";

const Dashboard = () => (
  <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10} p={5}>
    <Card title="Total Inventory Value" value="$10,000" />
    <Card title="Total Sales" value="$5,000" />
    <Card title="Total Purchases" value="$3,000" />
  </SimpleGrid>
);

export default Dashboard;