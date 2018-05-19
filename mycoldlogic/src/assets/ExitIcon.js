import React from 'react';

const ExitIcon = (props) => {
    return <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="537 173 125 78">
        <defs>
            <clipPath id="b">
                <rect x="537" y="173" width="125" height="78"/>
            </clipPath>
        </defs>
        <g id="exitsvg" clipPath="url(#b)">
            <path
                d="M36.458,20.625V5L0,41.458,36.458,77.917V62.292L15.625,41.458Zm31.25,5.208V5L31.25,41.458,67.708,77.917V56.563c26.042,0,44.271,8.333,57.292,26.562C119.792,57.083,104.167,31.042,67.708,25.833Z"
                transform="translate(537 168.125)" fill={props.color}/>
        </g>
    </svg>
};

export default ExitIcon