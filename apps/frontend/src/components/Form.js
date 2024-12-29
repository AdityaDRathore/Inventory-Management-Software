import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const FormInput = ({ label, type, value, onChange }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input type={type} value={value} onChange={onChange} />
  </FormControl>
);


FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;