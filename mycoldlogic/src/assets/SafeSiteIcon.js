import React from 'react';

const SafeSiteIcon = (props) => {
    let color = props.color;
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="179 173 125 125">
        <defs>
            <clipPath id="b">
                <rect x="179" y="173" width="125" height="125"/>
            </clipPath>
        </defs>
        <g id="savesitesvg" clipPath="url(#b)">
            <path
                d="M114.5,2H14.5A12.483,12.483,0,0,0,2.063,14.5L2,127l25-25h87.5A12.537,12.537,0,0,0,127,89.5v-75A12.537,12.537,0,0,0,114.5,2ZM45.75,58.25H33.25V45.75h12.5Zm25,0H58.25V45.75h12.5Zm25,0H83.25V45.75h12.5Z"
                transform="translate(177 171)" fill={props.color}/>
        </g>
    </svg>
};

export default SafeSiteIcon