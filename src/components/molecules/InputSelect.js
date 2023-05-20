import InputLabel from "@/components/atoms/InputLabel";
import { Select } from "antd";
import PropTypes from "prop-types";

function InputSelect({ htmlFor, label }) {
  return (
    <>
      <div className={"mb-1"}>
        <InputLabel htmlFor={htmlFor} label={label} />
      </div>
      <Select className={"w-full"} defaultValue={1}>
        <Select.Option key={1} value={1}>
          {"Indonesia"}
        </Select.Option>
        <Select.Option key={2} value={2}>
          {"Singapore"}
        </Select.Option>
      </Select>
    </>
  );
}

InputSelect.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputSelect;
