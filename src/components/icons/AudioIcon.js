import React from 'react';
import PropTypes from 'prop-types';

function AudioIcon(props) {
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
        <clipPath id="clipPath-audio-icon">
          <path
            id="Path_7"
            data-name="Path 7"
            d="M610.15-782h0a6.15,6.15,0,0,1,6.15,6.15v11.1a6.15,6.15,0,0,1-6.15,6.15h0a6.15,6.15,0,0,1-6.15-6.15v-11.1A6.15,6.15,0,0,1,610.15-782Z"
            transform="translate(-604 782)"
            fill="#fff"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>
      <g id="audio" transform="translate(-501 842)">
        <g id="Icon" transform="translate(524.889 -823.851)">
          <path
            id="Union_1"
            data-name="Union 1"
            d="M-2989.678-981.419v-9.9c-7.494-1.23-11.211-8.764-11.211-8.764a24.232,24.232,0,0,1,3.3,0c.479.772,3.608,6.147,9.912,6.249,6.86.112,10.235-6.249,10.235-6.249h3.55s-4.245,7.709-11.889,8.8v9.859Z"
            transform="translate(3000.889 1020.419)"
            fill="#fff"
          />
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(7.009)"
            clipPath="url(#clipPath-audio-icon)"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M599-787h15.3v26.4H599Z"
              transform="translate(-600.5 785.5)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="3.9"
            height="11.7"
            transform="translate(11.211 27.3)"
            fill="#fff"
          />
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(7.009)"
            clipPath="url(#clipPath-audio-icon)"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M599-787h15.3v26.4H599Z"
              transform="translate(-600.5 785.5)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_66"
            data-name="Path 66"
            d="M.067,3.55V0S9.056,4.948,9,13.784.067,27,.067,27a24.214,24.214,0,0,1,0-3.3c.772-.479,6.147-3.608,6.249-9.912C6.427,6.925.067,3.55.067,3.55Z"
            transform="translate(27 20.27) rotate(90)"
            fill="#fff"
          />
        </g>
        <path
          id="Disabled"
          d="M538.3-175.986l5.718,5.718-39.282,39.282-5.718-5.718Z"
          transform="translate(16.99 -651.01)"
          fill={disabled ? '#343332' : 'none'}
        />
      </g>
    </svg>
  );
}

AudioIcon.propTypes = {
  disabled: PropTypes.bool.isRequired
};

AudioIcon.defaultProps = {
  disabled: false
};

export default AudioIcon;
