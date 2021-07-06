import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs(category);

    //console.log(loading);

    return (
        <>
            <h3 className='card animate__animated animate__fadeInUp'>{category}</h3>

            {loading && <p className='card animate__animated animate__flash'>Loading</p> /* loading ? <p>Loading</p> : null */}

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>

    )
}
