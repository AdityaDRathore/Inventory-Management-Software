import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({ label, type, value, onChange }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input type={type} value={value} onChange={onChange} />
  </FormControl>
);

export default FormInput;