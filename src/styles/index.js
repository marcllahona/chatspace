import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  margin: 0px auto;
`;

/**
 * Button used with Actions.
 */
const Button = styled.button`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;
  background-color: ${props =>
    props.inverted
      ? props.theme.palette.inverted
      : props.theme.palette.primary};
  color: ${props =>
    props.inverted
      ? props.theme.palette.primary
      : props.theme.palette.inverted};
  border-radius: ${props => props.border_radius}px;
  border: none;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  height: ${props =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  transition: all 0.2s ease 0s;

  :hover {
    opacity: 0.75;
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
  inverted: PropTypes.bool,
  border_radius: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Button.defaultProps = {
  inverted: false,
  border_radius: 6,
  height: 50,
  width: 'auto'
};

/**
 * Button used with Forms.
 */
const FormButton = styled.button`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.inverted};
  border-radius: ${props => props.border_radius}px;
  border: none;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  height: ${props =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  min-width: ${props => props.min_width}px;
  transition: all 0.2s ease 0s;
  opacity: ${props => (props.disabled ? 0.5 : 1.0)};

  :hover {
    opacity: 0.5;
  }
`;

FormButton.displayName = 'FormButton';

FormButton.propTypes = {
  disabled: PropTypes.bool,
  border_radius: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min_width: PropTypes.number
};

FormButton.defaultProps = {
  disabled: false,
  border_radius: 6,
  height: 50,
  min_width: 200
};

/**
 * Circular Button used with Actions.
 */
const CircularButton = styled.button`
  background-color: ${props => props.theme.palette[props.color]};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 15px;
  padding: 5px;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  :hover,
  :focus,
  :active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

CircularButton.displayName = 'CircularButton';

CircularButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  size: PropTypes.number
};

CircularButton.defaultProps = {
  size: 50
};

const InputField = styled.input`
  font-size: 14px;
  letter-spacing: 1px;
  background-color: ${props => props.theme.palette.backgroundForm};
  color: ${props => props.theme.palette.secondary};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.palette.backgroundForm};
  margin: 0;
  width: 100%;
  height: 50px;
  padding: 0.5em 1em 0.5em 1em;
  line-height: 20px;
  outline: none !important;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  cursor: text;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${props => props.theme.palette.textForm};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${props => props.theme.palette.textForm};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${props => props.theme.palette.textForm};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${props => props.theme.palette.textForm};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  :focus {
    border: 1px solid ${props => props.theme.palette.primary};
  }
`;

InputField.displayName = 'InputField';

InputField.propTypes = {
  primary: PropTypes.bool
};

InputField.defaultProps = {
  primary: false
};

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 35px;
  font-weight: bold;
  letter-spacing: 1.25px;
  color: ${props => props.theme.palette.textForm};
  padding: 1em 0 1em 0;
`;

InputLabel.displayName = 'InputLabel';

const InputBody = styled.div`
  position: relative;
  text-align: start;
  width: 100%;
`;

const ActionBar = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 32px;
  color: ${props => props.theme.palette.onSecondary};
  padding: 2px;
  background: ${props => props.theme.palette.secondary};
  opacity: 0.62;
  text-align: center;
  align-items: center;
`;

const ActionBarName = styled.p`
  font-size: 14px;
  width: 100%;
  font-weight: 600;
  text-align: center;
  line-height: 10px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.palette.onSecondary};
`;

const VoiceVisualizer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: -1;
  background: ${props => props.theme.palette.secondary};
  opacity: 0.3;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.06, 1.13, 1, 1) 0s;
  transform: scale(1, 1.1, 1.05, 1.02, 1.08, 1);
`;

const ParticipantsContainer = styled.div`
  width: 100%;
  z-index: 1;
  height: 100%;
  padding: 15px;
  transition: all 0.35s ease 0s;
`;

const ParticipantsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 80px;
  height: calc(100vh - 290px);
  max-height: calc(100vh - 290px);
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
`;

const ParticipantAnimation = styled.div`
  width: 100%;
  max-width: 400px;
  height: 96%;
  max-height: 400px;
  margin: 1%;
  transform: rotate3d(1, 1, 1, 0deg) scale(1);
  opacity: 1;
`;

const ParticipantAnimationMini = styled.div`
  position: fixed;
  max-width: 400px;
  max-height: 400px;
  top: 20px;
  left: 20px;
  height: 120px;
  width: 120px;
  z-index: 1;
  margin: 0px;
  transform: rotate3d(1, 1, 1, 0deg) scale(1);
  opacity: 1;
`;

const ParticipantContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-height: inherit;
  margin: 0px auto;
`;

const ParticipantMedia = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
  width: 100%;
  height: 100%;
  max-height: inherit;
  border-radius: 2px;
  transition: border 0.1s ease 0s;
  background: transparent;
`;

const ParticipantMediaDisabled = styled.div`
  width: 100%;
  height: 100%;
  max-height: inherit;
  border-radius: 2px;
  background: linear-gradient(-45deg, rgb(95, 202, 228), rgb(175, 229, 242));
  overflow: hidden;
`;

const ActionsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0px;
  z-index: 1;
`;

const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0px;
  z-index: 2;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(70px + 15px);
  right: calc(15px);
  width: 350px;
  height: calc(100vh - 140px - 30px);
  background-color: ${props => props.theme.palette.onPrimary};
  z-index: 2;
  border-radius: 3px;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const ChatHeader = styled.div`
  position: relative;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  background: transparent;
`;
const ChatBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  border-radius: 5px;
  background: ${props => props.theme.palette.onPrimary};
`;

const ChatMessageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;
  width: 100%;
  -webkit-box-pack: end;
  justify-content: end;
  overflow-y: auto;
  padding: 0 20px;
`;

const ChatFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${props => props.theme.palette.backgroundForm};
  align-items: center;
  z-index: 2;
`;

const ChatMessageContainer = styled.div`
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  max-width: 80%;
  min-height: min-content;
  margin-bottom: 20px;
`;

ChatMessageContainer.propTypes = {
  isUser: PropTypes.bool
};

const ChatMessage = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  min-height: min-content;
  word-break: break-word;
  background: ${props => props.theme.palette.primary};
  padding: 5px 10px;
  border-radius: 3px;
`;

const ChatMessageName = styled.p`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-bottom: 5px;
  color: ${props => props.theme.palette.secondary};
`;

const ChatMessageText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  text-align: start;
  color: ${props => props.theme.palette.onPrimary};
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isTransparent ? 'transparent' : props.theme.palette.secondary};
  opacity: ${props => (props.isTransparent ? 1 : 0.5)};
  z-index: 5;
`;

Overlay.propTypes = {
  isTransparent: PropTypes.bool
};

Overlay.defaultProps = {
  isTransparent: false
};

const Menu = styled.div`
  position: absolute;
  z-index: 1001;
  text-align: left;
  background: #fff;
  color: black;
  border: none;
  max-width: 400px;
  width: calc(100vw / 2);
  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  padding: 1em;
`;

const MenuHeader = styled.div`
  position: relative;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
  background: transparent;
`;

const MenuTitle = styled.h1`
  font-weight: bold;
  padding-bottom: 1em;
`;

const MenuBody = styled.div`
  display: grid;
  grid-row-gap: 1.5em;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 1em;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  padding: 1em 0;
  text-align: center;
`;

const Instructions = styled.h3`
  font-weight: bold;
  padding: 1em 0;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 1.5em;
  padding: 1em 0;
  width: 100%;
`;

const CustomLink = styled(Link)`
  font-size: 16px;
  color: ${props => props.theme.palette.primary};
  padding: 0.5em 0;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4em;
  width: 100%;
`;

const URL = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const LoaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  left: 50%;
  top: 50%;
  background-color: ${props => props.theme.palette.onPrimary};
  transform: translate(-50%, -50%) !important;
  z-index: 3000;
`;

const LoaderBody = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 2em;
`;

const LoaderText = styled.h2`
  font-weight: 700;
  color: ${props => props.theme.palette.secondary};
  margin: 0;
  text-align: center;
`;

const LoaderIcon = styled.div`
  background-color: ${props => props.theme.palette.onPrimary};
  border: 20px solid ${props => props.theme.palette.secondary};
  border-radius: 50%;
  border-top: 20px solid ${props => props.theme.palette.primary};
  width: 150px;
  height: 150px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {
  AppContainer,
  Body,
  Container,
  Title,
  Instructions,
  Action,
  CustomLink,
  Form,
  Button,
  URL,
  CircularButton,
  FormButton,
  InputBody,
  InputField,
  InputLabel,
  ActionBar,
  ActionBarName,
  VoiceVisualizer,
  ParticipantsContainer,
  ParticipantsList,
  ParticipantAnimation,
  ParticipantContainer,
  ParticipantMedia,
  ParticipantMediaDisabled,
  ParticipantAnimationMini,
  ActionsBar,
  NavigationBar,
  ChatContainer,
  ChatHeader,
  ChatBody,
  ChatFooter,
  ChatMessageList,
  ChatMessageContainer,
  ChatMessage,
  ChatMessageName,
  ChatMessageText,
  Overlay,
  Menu,
  Modal,
  MenuHeader,
  MenuTitle,
  MenuBody,
  LoaderContainer,
  LoaderBody,
  LoaderText,
  LoaderIcon
};
