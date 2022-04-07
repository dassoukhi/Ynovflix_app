import React, { useState } from 'react';
import './Serie.css';

const Serie = ({saisons}) => {
    const [select, setSelect] = useState(undefined);
    const [strEpisode, setStrEpisode] = useState("");

    const update = (episode, str) =>{
        setSelect(episode);
        setStrEpisode(str);
    }
    console.log("select:", select);
    return (
        <div className='w-4/6 space-y-10'>
            {select &&
            (<div className='w-full h-5/6'>
                    <span className='text-lg text-gray-400 mt-10 font-semibold'>{strEpisode}</span>
                    <iframe src={String(select).replace("watch?v=", "embed/")} title={"serie"} scrolling="auto" frameborder="0"  allowfullscreen="true"style={{height: "400px", width: "100%"}}></iframe>
            </div>)
            }
            <div className='flex flex-row items-center justify-between pr-10 pl-10  bg-gray-800'>
                {saisons.map((saison, index) => {
                    return (
                        // <div key={index}>
                        //     <span className='text-xl text-gray-400'>Saison {index+1}</span>
                        // </div>
                        <div class="dropdown inline-block relative">
                        <button class="bg-gray-800 hover:bg-gray-700 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                          <span class="mr-1 text-gray-400">Saison {index+1}</span>
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 rounded-lg">
                            {
                                saison.map((episode, i) => {
                                    return (
                                        <li class=""><a class="bg-gray-700 text-gray-400 hover:text-gray-700 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"  onClick={() => update(episode, `Saison ${index+1} : épisode ${i+1}`)}>Episode {i+1}</a></li>

                                    )
                                } )
                            }
                        </ul>
                      </div>
                      )
                })}
            </div>
        </div>
    );
};

export default Serie;
