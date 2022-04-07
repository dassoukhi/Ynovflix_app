import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShomeMedia from './ShomeMedia';


const Media = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full items-center justify-center bg-gray-900">
            <div className='bg-gray-900  flex self-start mt-6 ml-6 shadow-sm cursor-pointer' onClick={()=> navigate('/')}>
                <span className='text-red-800 font-bold text-2xl p-1 cursor-pointer'>YNOVFLIX</span>
            </div>
            <ShomeMedia />
            
        </div>
    );
};

export default Media;