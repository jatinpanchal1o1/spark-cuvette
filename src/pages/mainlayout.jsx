import React from 'react';
import Desktop from './desktop';
const Mainlayout = (props) => {
    return (
        <div>
            <Desktop/>
            {props.childern}
        </div>
    );
}

export default Mainlayout;
