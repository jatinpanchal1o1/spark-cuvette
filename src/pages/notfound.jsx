import React from 'react';
import { Link } from "react-router-dom";
import LogoSpark from "../assets/SLogo.svg";

const Notfound = () => {
    return (
        <div className='bg-zinc-100 text-center h-screen'>
            <div className="p-6 w-50"><Link to="/spark-cuvette"><img
            src={LogoSpark}
            className='object-cover'
            />
            </Link>
            </div>
            <h3 className='text-5xl font-extrabold tracking-tighter leading-tight text-black pt-50'>Not Found This Page</h3>
            <Link to="/spark-cuvette"><button type='button' className='cursor-pointer text-xs text-green-600 underline pt-5'>home</button></Link>
        </div>
    );
}

export default Notfound;
