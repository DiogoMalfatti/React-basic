import propTypes from 'prop-types';
import './styles.css';

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default TextInput;