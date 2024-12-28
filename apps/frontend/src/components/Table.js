import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

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
      {data.map((row, index) => (
        <Tr key={index}>
          {columns.map((col) => (
            <Td key={col}>{row[col]}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default CustomTable;