import React from 'react';
import { PropTypes } from 'prop-types';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import Icon from '../icons/Icon';
import LEAVE_MEETING_BY_NAME_MUTATION from '../../graphql/mutation/leaveMeetingByName';
import * as S from '../../styles';

function ExitMenu(props) {
  const { id, name, onCancel } = props;
  console.log(id, name);
  return (
    <>
      <S.MenuHeader>
        <Icon type="close" onClick={onCancel} />
      </S.MenuHeader>
      <S.MenuTitle>Are you sure?</S.MenuTitle>
      <S.MenuBody>
        <p>Click the button if you really want to leave the meeting</p>
        <Mutation
          mutation={LEAVE_MEETING_BY_NAME_MUTATION}
          variables={{ userID: id, name }}
        >
          {(leaveMeetingByName, { data, loading, error }) => {
            if (data) {
              return <Redirect to={`/`} />;
            }
            return (
              <S.Button
                type="button"
                onClick={async e => {
                  e.preventDefault();
                  await leaveMeetingByName();
                }}
              >
                Leave Meeting
              </S.Button>
            );
          }}
        </Mutation>
      </S.MenuBody>
    </>
  );
}

ExitMenu.propTypes = {
  onCancel: PropTypes.func.isRequired
};

export default ExitMenu;
