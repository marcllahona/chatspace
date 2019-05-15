import React from 'react';
import PropTypes from "prop-types";
import Icon from "../icons/Icon";
import * as S from "../../styles";

function ChatHeader(props){
    const { hide } = props;
    return(
        <S.ChatHeader>
            <Icon type="close" onClick={hide} />
        </S.ChatHeader>
    )
}

ChatHeader.propTypes = {
    hide: PropTypes.func.isRequired,
};

export default ChatHeader
