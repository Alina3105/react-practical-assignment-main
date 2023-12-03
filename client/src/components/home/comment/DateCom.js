import React from 'react'

const DateCom = ({ dateC }) => {

    const mls = parseInt(dateC);
    const date = new Date(mls);
    const currentTime = new Date();
    const timeDiffInHours = (currentTime - date) / (1000 * 60 * 60);
    const timeDiffInMinutes = Math.floor((currentTime - date) / 60000);
    let formattedTime;

    if (timeDiffInHours > 24) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        formattedTime = `${day}.${month}.${year % 100}`;
    } else if (timeDiffInHours > 1) {
        const hoursAgo = Math.floor(timeDiffInHours);
        formattedTime = ` ${hoursAgo} hours ago`;
    } else {
        const minAgo = Math.floor(timeDiffInMinutes);
        formattedTime = ` ${minAgo} min ago`;
    }

    return (
        <div style={{fontSize:'10px',color:'#888',fontFamily:'Neucha'}}>{formattedTime}</div>
    )
}

export default DateCom