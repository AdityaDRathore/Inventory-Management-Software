import { Box, Heading, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Card = ({ title, value }) => (
  <Box p={5} shadow="md" borderWidth="1px">
    <Heading fontSize="xl">{title}</Heading>
    <Text mt={4}>{value}</Text>
  </Box>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Card;