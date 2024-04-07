import React from 'react';
import TimelineHeading from './TimelineHeading';
import ClockIcon from '../../../public/images/ClockIcon.png'; 
import theme from '../../themes/default';

const TimelineItem = ({ children, date, title }) => {
    const { colors } = theme; // Destructuring colors from theme

    return (
        <div className="flex flex-col items-start justify-center">
            <TimelineHeading title={title ?? ''} />
            <div className="flex gap-x-1 items-center mb-4">
                <img src={ClockIcon} alt="Clock Icon" height={"20px"} />
                <span style={{ color: colors.primary1 }} className='text-gray-500 font-inter tracking-tight text-sm'>{date}</span>
            </div>
            <>
                {children}
            </>
        </div>
    );
}

export default TimelineItem;
