import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//b3b634f2
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b3b634f2';

const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState ('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect (() => {
        searchMovies('Hobbit');



    },[]);
    return (
        <div className='app'>
        <h1>Movies</h1>

           <div className="search">
            <input
            placeholder="Enter the movie title"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
           </div>

           { movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie ={movie} />
                    ))
                    }
               </div>
            ) : (
                <div className='empty'>
                    <h2>Movie not found</h2>
                    </div>
            )}
        </div>
    );
}

export default App;