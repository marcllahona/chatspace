import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import ME_QUERY from '../query/me';

const User = props => (
  <Query {...props} query={ME_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
