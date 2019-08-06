import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

    Winter :  {
    text : "Burr, it is chilly",
    iconName : 'snowflake'
    },
    Summer :  {
    text : "Its time to hit Beach",
    iconName : 'sun'
    }
}


const getSeason = (lat, month) => {
    if( month > 2 && month < 9){
        return lat > 0  ? 'Summer' : 'Winter';
    }
    else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonsDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season === 'Winter' ? 'Burr, it is chilly' : 'Its time to hit Beach';
    // const icon = season === 'Winter' ? 'snowflake' : 'sun';
    
    // console.log(seasonConfig);
    // console.log(season);  
    // console.log(seasonConfig[season]);

    const { text, iconName } = seasonConfig[season];
    
    
    return  (
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1 className='text'>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )

}

export default SeasonsDisplay;
