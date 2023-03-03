import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import MovieCard from './MovieCard';
//88c981a2


const API_URl = 'http://www.omdbapi.com?apikey=88c981a2'



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm,setsearchTerm] = useState('');
  const serchMovies = async (title) => {
    const response = await fetch(`${API_URl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {

    serchMovies('Spiderman');

  }, [])
  return (

    <div className="App">

      <h1>moviesLand</h1>
      <div className="search">

        <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => {setsearchTerm(e.target.value) }} />

        <img src="{SearchIcon}" alt="search" onClick={() => { serchMovies(searchTerm)}} />

      </div>
      
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};


export default App;
