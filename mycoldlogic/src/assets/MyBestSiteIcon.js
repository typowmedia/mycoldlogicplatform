import React from 'react';

const MyBestSiteIcon = (props) => {
    let color = props.color;
    return <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 173 125 125">
        <defs>
            <clipPath id="b">
                <rect y="173" width="125" height="125"/>
            </clipPath>
        </defs>
        <g id="bestsitesvg" clipPath="url(#b)">
            <path
                d="M64.438,2A62.5,62.5,0,1,0,127,64.5,62.429,62.429,0,0,0,64.438,2ZM64.5,114.5a50,50,0,1,1,50-50A49.986,49.986,0,0,1,64.5,114.5Zm6.25-62.875,6.625,6.625L84,51.625l6.625,6.625,6.625-6.625L84,38.375Zm-25.75,0,6.625,6.625,6.625-6.625L45,38.375,31.75,51.625l6.625,6.625Zm19.5,47.25A34.352,34.352,0,0,0,96.438,77H32.563A34.351,34.351,0,0,0,64.5,98.875Z"
                transform="translate(-2 171)" fill={props.color}/>
        </g>
    </svg>
};

export default MyBestSiteIcon