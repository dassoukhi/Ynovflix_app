import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Hearder} from '../utils/Url';
import { Link } from 'react-router-dom';

const ListMedia = ({media}) => {
    
    return (
        <div>
            {
                media.length > 0 ? 
                    <div className='m-16 grid gap-x-4 grid-cols-4 grid-rows-4 space-y-10 p-2'>
                        {media.map(item => {
                            return (
                                
                                <Link key={item.id} to={`/media/${item.mediaId}/${item.id}`} >

                                    <div className='flex flex-col content-center h-full shadow-lg space-y-4 cursor-pointer bg-gray-800 rounded-md hover:bg-slate-600 hover:shadow-lg hover:shadow-slate-700 transform motion-safe:hover:scale-110'>
                                            <img className='object-cover h-4/5 w-96' alt={item.titre} src={item.currentPoster}/>
                                            <span className='flex self-center font-bold text-lg text-gray-200'>{item.titre}</span>
                                    </div>
                                </Link>

                                
                            )
                        })}
                    </div>
                    :
                    <div>Data not Found</div>
                
            }
        </div>
    );
};

export default ListMedia;