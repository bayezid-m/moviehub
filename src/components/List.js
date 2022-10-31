import React,{useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import Search from '../components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./List.css";

const url = "https://api.themoviedb.org/3/movie/popular?api_key=3ec1d4184268274b4a951e2126299319";
//const search_url = "https://api.themoviedb.org/3/search/movie?api_key=3ec1d4184268274b4a951e2126299319&query";

const List = () => {
    const [movies, setMovies]=useState([]);
   
    useEffect(() => {
        fetch(url)
        .then((res)=>res.json())
        .then(data=>{
          setMovies(data.results);
        })
      }, [])
    return (
      
        <div className='container'>
        <Search/>
        <div className='grid'>
          {movies.map((movieData)=>
          <MovieCard key={movieData.id} {...movieData}/>)}
        </div>
        </div>
    );
};

export default List;