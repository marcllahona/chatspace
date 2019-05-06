import React from 'react';
import PropTypes from 'prop-types';

function VideoIcon(props) {
  const { disabled } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      style={{ height: '100%', width: '100%', maxHeight: 'inherit' }}
    >
      <defs>
        <clipPath id="clipPath-video-icon">
          <path
            id="Path_44"
            data-name="Path 44"
            d="M1002.215-762a6.12,6.12,0,0,1,6.17,6.073v16.7a6.12,6.12,0,0,1-6.17,6.073H979.17a6.12,6.12,0,0,1-6.17-6.073v-16.7A6.12,6.12,0,0,1,979.17-762Zm20.339,3.846H1023V-737h-.465l-11.843-6.044V-752.2Z"
            transform="translate(-973 762)"
            fill="none"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>
      <g id="video" transform="translate(-926 842)">
        <g
          id="Icon"
          transform="translate(938.475 -818.525)"
          clipPath="url(#clipPath-video-icon)"
        >
          <path
            id="Path_43"
            data-name="Path 43"
            d="M968-767h53.205v32.051H968Z"
            transform="translate(-969.603 765.397)"
            fill="#fff"
          />
        </g>
        <path
          id="Disabled"
          d="M542.66-175.986l6.354,6.354-43.646,43.646-6.354-6.354Z"
          transform="translate(439 -653)"
          fill={disabled ? '#343332' : 'none'}
        />
      </g>
    </svg>
  );
}

VideoIcon.propTypes = {
  disabled: PropTypes.bool.isRequired
};

VideoIcon.defaultProps = {
  disabled: false
};

export default VideoIcon;
