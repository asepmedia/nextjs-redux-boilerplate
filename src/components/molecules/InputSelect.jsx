import InputLabel from '@/components/atoms/InputLabel';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

function InputSelect({
  defaultValue,
  htmlFor,
  label,
  placeholder,
  onSelect,
  suffixIcon,
  mode,
  loading,
  size,
  options = [],
}) {
  return (
    <>
      <div className={'mb-1'}>
        <InputLabel htmlFor={htmlFor} label={label} />
      </div>
      <Select
        className={'w-full'}
        mode={mode}
        size={size}
        suffixIcon={suffixIcon}
        defaultValue={defaultValue}
        loading={loading}
        placeholder={<label>{placeholder || 'Choose one'}</label>}
        onSelect={(value, option) => onSelect(value, option)}
      >
        {options.length > 0
          ? options.map((option, index) => (
              <Select.Option key={index} value={option.value}>
                {option.text}
              </Select.Option>
            ))
          : null}
      </Select>
    </>
  );
}

InputSelect.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  suffixIcon: PropTypes.node,
  prefixIcon: PropTypes.node,
  mode: PropTypes.string,
  size: PropTypes.string,
  options: PropTypes.array,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default React.memo(InputSelect);
