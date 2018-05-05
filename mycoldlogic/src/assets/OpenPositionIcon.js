import React from 'react';

const OpenPositionIcon = (props) => {
    let color = props.color;
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="358 173 103 125">
        <defs>
            <clipPath id="b">
                <rect x="358" y="173" width="103" height="125"/>
            </clipPath>
        </defs>
        <g id="openpositionsvg" clipPath="url(#b)">
            <path d="M34.412,98.588H78.529V54.471h29.412L56.471,3,5,54.471H34.412ZM5,113.294H107.941V128H5Z"
                  transform="translate(353.352 170)" fill={props.color}/>
        </g>
    </svg>
};

export default OpenPositionIcon