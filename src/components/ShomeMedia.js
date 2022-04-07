import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Film from './Film';
import Serie from './Serie';

const ShomeMedia = props => {
    const params = useParams();
    const [media, setMedia] = useState({})
    const [poster, setPoster] = useState("")
    const [loading, setLoading] = useState(false)
    const [saison, setSaison] = useState(undefined)

    useEffect(()=>{
        setLoading(true);
        axios.get(`/medias/${params.media_id}/${1}`).then(res => {
            console.log("res", res.data);
            if (res.data.genre !== "Film") {
                setSaison(res.data.saisons)
            }
            setMedia(res.data);
            axios.post(`/medias/currentposter?user_id=${1}&media_id=${params.media_id}`).then(res => {
                // console.log("poster", res.data);
                setPoster(res.data)
                setLoading(false)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))



    }, [params])
    console.log("media", media)
    return (
        loading ?
        <div className='flex flex-row h-screen w-screen bg-gray-900 justify-center items-center'>
            <span className='font-bold text-2xl text-gray-200 mb-60'>Chargement en cours ...</span>
        </div>
        : 
        <div className='flex flex-col bg-gray-900 items-center space-y-10 mt-0'>
            <div className='w-auto flex flex-row items-center space-x-5'>
                <div className='flex justify-center mt-10  w-2/3'>
                    <img className='object-contain h-96 w-9/12' alt={media.titre} src={poster}/>
                </div>
                <div className=' flex flex-col w-2/3 p-5 space-y-4 shadow-slate-700'>
                    <div className='w-10/12 flex flex-col space-y-3'>
                        <span className='font-bold text-2xl text-gray-200'>{media.titre}</span>
                        <span className='font-normal text-lg text-gray-200'>{media.annee_sortie}</span>
                        <span className='font-thin text-base text-gray-200'>{"1h49"}</span>
                    </div>
                    <div className='w-10/12 flex flex-col space-y-4 shadow-slate-700'>
                        <div>
                            <span className='font-sans text-gray-200'>
                                {media.description}
                            </span>
                        </div>
                        <div className='flex flex-row space-x-5 items-center'>
                            <span className='font-semibold text-lg text-gray-100'>
                                {"Genre"}
                            </span>
                            <span className='text-gray-200'>
                                {media.genre}
                            </span>
                        </div>  
                        <div className='flex flex-row space-x-5 items-center'>
                            <span className='font-semibold text-lg text-gray-100'>
                                    {"Catégorie"}
                            </span>
                            <span className='text-gray-200'>
                                    {media.categorie}
                            </span>
                        </div>                    
                    </div>
                </div>
            </div>
            {
                !saison ?
                <Film media={media}/>
                :
                <Serie saisons={saison} />
                // <div className='w-2/3 h-5/6'>
                //     <iframe src={String(saison[0][0]).replace("watch?v=", "embed/")} title={media.titre} scrolling="auto" frameborder="0"  allowfullscreen="true"style={{height: "400px", width: "100%"}}></iframe>
                // </div>
            }

            <div className='h-64 bg-red-300'>
                
            </div>
        </div>
    );
};

export default ShomeMedia;