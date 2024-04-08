import React from 'react';
import theme from '../../themes/default'; 
 

const TimelineHeadingSoftware = ({ title }) => {
    const { colors } = theme; 
    
    return (
        <h3 style={{ 
            color: colors.primary1,
            fontSize: "30px",
            paddingtop: "10px",
            paddingBottom: "10px",
            
         }} >
            {title}
        </h3>
    );
}

export default TimelineHeadingSoftware;
