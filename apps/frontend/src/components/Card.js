import { Box, Heading, Text } from "@chakra-ui/react";

const Card = ({ title, value }) => (
  <Box p={5} shadow="md" borderWidth="1px">
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{value}</Text>
  </Box>
);

export default Card;