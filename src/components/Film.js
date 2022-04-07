import React from 'react';

const Film = ({media}) => {
    return (
        <div className='w-2/3 h-5/6'>
            <iframe src={String(media.contenu).replace("watch?v=", "embed/")} title={media.titre} scrolling="auto" frameborder="0"  allowfullscreen="true"style={{height: "400px", width: "100%"}}></iframe>
        </div>
    );
};

export default Film;