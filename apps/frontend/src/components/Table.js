import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const CustomTable = ({ columns, data }) => (
  <Table variant="simple">
    <Thead>
      <Tr>
        {columns.map((col) => (
          <Th key={col}>{col}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((row) => (
        <Tr key={row.id}>
          {columns.map((col) => (
            <Td key={col}>{row[col]}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);
CustomTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomTable;