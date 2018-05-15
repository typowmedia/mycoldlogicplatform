import React from 'react';

const RequestPasswordIcon = (props) => {
    let color = props.color;
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="537 0 90 125">
        <defs>
            <clipPath id="b">
                <rect x="537" width="90" height="125"/>
            </clipPath>
        </defs>
        <g id="requestpasswordsvg" clipPath="url(#b)">
            <path
                d="M30.048,52.048V29.786a14.881,14.881,0,1,1,29.762,0V52.048a26.786,26.786,0,1,0-29.762,0Zm58.571,27.56L61.6,66.155a8.383,8.383,0,0,0-3.214-.655H53.857V29.786a8.929,8.929,0,0,0-17.857,0V93.714L15.583,89.429a10.4,10.4,0,0,0-1.429-.179,6.659,6.659,0,0,0-4.7,1.964l-4.7,4.762,29.4,29.4A8.96,8.96,0,0,0,40.464,128H80.881a8.67,8.67,0,0,0,8.571-7.619l4.464-31.369a8.555,8.555,0,0,0-5.3-9.4Z"
                transform="translate(532.393 -3)" fill={props.color}/>
        </g>
    </svg>
};

export default RequestPasswordIcon