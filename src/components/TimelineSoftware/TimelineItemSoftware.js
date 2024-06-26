import React from 'react';
import TimelineHeading from './TimelineHeadingSoftware';
import theme from '../../themes/default';

const TimelineItemSoftware = ({ children, date, title }) => {
    const { colors } = theme; 

    return (
        <div className="flex flex-col items-start justify-center">
            <TimelineHeading title={title ?? '' }
            />
            <div style={{
                display:"flex",
                flex: "1fr 1fr 100fr",
                justifyItems: "left",
                alignItems: "center",
                }} >
                <img src="/images/ClockIcon.png" alt="Clock Icon" height={"20px"} />
                <span style={{ color: colors.primary1 }} className='text-gray-500 font-inter tracking-tight text-sm'>{date}</span>
            </div>
            <>
                {children}
            </>
        </div>
    );
}

export default TimelineItemSoftware;
