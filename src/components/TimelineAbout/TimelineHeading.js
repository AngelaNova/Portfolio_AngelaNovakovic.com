import React from 'react';
import theme from '../../themes/default'; 
 

const TimelineHeading = ({ title }) => {
    const { colors } = theme; // Destructuring colors from theme
    return (
        <h3 style={{ color: colors.primary1 }} className='mb-3 text-[22px] md:text-[24px] font-semibold leading-[1.08] tracking-heading font-heebo'>
            {title}
        </h3>
    );
}

export default TimelineHeading;
