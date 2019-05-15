import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from '../../styles';

function PasswordField(props) {
    const { label, name, placeholder, value, onChange } = props;
    const [isVisible, setIsVisible] = useState(false);

    return (
        <S.InputBody>
            {label && <S.InputLabel htmlFor={name}>{label}</S.InputLabel>}
            <S.InputFieldContainer>
                <S.InputField
                    id={name}
                    onKeyDown={onChange}
                    type={isVisible ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />
                <S.VisibleButton type="button" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'HIDE' : 'SHOW'}
                </S.VisibleButton>
            </S.InputFieldContainer>
        </S.InputBody>
    );
}

PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

PasswordField.defaultProps = {
    label: null,
    placeholder: ''
};

export default PasswordField;
