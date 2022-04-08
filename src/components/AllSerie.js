import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hearder } from '../utils/Url';
import ListMedia from './ListMedia';

const AllSerie = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("rouyte", location.pathname);
    const [media, setMedia] = useState([]);

    useEffect(()=>{
        axios.post("/medias/posters/genre?user_id=1&genre=Serie", 1, Hearder).then(response=>{
            console.log("res", response.data)
            setMedia(response.data)
        })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center bg-gray-900">
            <div className='bg-gray-900  flex self-start mt-6 ml-6 shadow-sm cursor-pointer' onClick={()=> navigate('/')}>
            <span className='text-red-800 font-bold text-2xl p-1 '>YNOVFLIX</span>
            </div>
            <div className='bg-gray-900 flex flex-row w-2/4'>
                <ul class="dropdown-menu text-gray-700 pt-1 rounded-lg flex flex-row w-full justify-between pr-5 pl-5">
                    <li class=""><a href='/' className={`${location.pathname === "/" ? "bg-gray-600" : "bg-gray-900 "} text-gray-400 hover:text-gray-400 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap cursor-pointer h-10 text-center`} >Tout</a></li>
                    <li class=""><a href='/film' class={`${location.pathname === "/film" ? "bg-gray-600" : "bg-gray-900 "} text-gray-400 hover:text-gray-400 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap cursor-pointer h-10 text-center`} >Film</a></li>
                    <li class=""><a href='/serie' class={`${location.pathname === "/serie" ? "bg-gray-600" : "bg-gray-900 "} text-gray-400 hover:text-gray-400 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap cursor-pointer h-10 text-center`} >Série</a></li>
                </ul>
            </div>
            {media.length && <ListMedia media={media} />}
        </div>
    );
};
export default AllSerie;