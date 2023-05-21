import PropTypes from "prop-types";

function InputLabel({ htmlFor, label }) {
  return (
    <label className={"text-sm font-medium text-slate-700"} htmlFor={htmlFor}>
      {label}
    </label>
  );
}

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputLabel;
