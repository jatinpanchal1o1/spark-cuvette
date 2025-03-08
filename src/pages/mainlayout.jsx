import React from 'react';
import Header from "../component/header";
import Footer from "../component/footer";
const Mainlayout = (props) => {
    return (
        <div className='flex overflow-hidden p-6 flex-col items-center py-12 bg-neutral-50'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Mainlayout;
