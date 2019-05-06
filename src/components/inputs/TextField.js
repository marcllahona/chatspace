import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../styles';

function TextField(props) {
  const { label, name, type, placeholder, value, onChange } = props;

  return (
    <S.InputBody>
      {label && <S.InputLabel htmlFor={name}>{label}</S.InputLabel>}
      <S.InputField
        id={name}
        onKeyDown={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </S.InputBody>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

TextField.defaultProps = {
  label: null,
  type: 'text',
  placeholder: ''
};

export default TextField;
