import React from 'react';

const DashboardIcon = ( props ) => {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="716 173 125 106">
        <defs>
            <clipPath id="b">
                <rect x="716" y="173" width="125" height="106"/>
            </clipPath>
        </defs>
        <g id="dashboardsvg" clipPath="url(#b)">
            <path d="M52,109.25V71.75H77v37.5h31.25v-50H127L64.5,3,2,59.25H20.75v50Z" transform="translate(714 169.8)" fill={props.color}/>
        </g>
    </svg>
};

export default DashboardIcon