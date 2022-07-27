import React, { useState, useEffect } from 'react';

function Movie() {

    const apiUrl = 'http://localhost:3000/search'
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                //    console.log(responseData)
                  setMovies(responseData)     
            })
    }, []);

    return (

        <div className="movies-data">

            {movies.map((movie, i) => {

                return (<Movie movie={movie} />)

            })}


        </div>
    )


}


export default Movie;