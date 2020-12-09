import axios from './axios';
import React, {  useEffect, useState } from 'react';
import './Row.css';


const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log('[movies]: ', request.data.results);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>


            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.name} 
                        key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Row
