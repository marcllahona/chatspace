import PropTypes from 'prop-types';

export const userProps = PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string,
});

export const meetingProps = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    access: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    participants: PropTypes.arrayOf(userProps).isRequired,
    messages: PropTypes.arrayOf(),
});

export const messageProps = PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    content: PropTypes.string.isRequired,
    meeting: PropTypes.shape(meetingProps),
    author: PropTypes.shape(userProps).isRequired
});
