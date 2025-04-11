import PropTypes from "prop-types";
import "./InputPage.css";

const FormInput = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input 
        type="number" 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={`Enter ${label}`} 
        required 
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;