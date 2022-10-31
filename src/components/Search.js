import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import "./Search.css"
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';



const Search = () => {
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      //console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
     <>
    
            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
         
            <div className='grid'>
          {movies.map((movieData)=>
          <MovieCard key={movieData.id} {...movieData}/>)}
        </div>
   

   
       
        
    </>
  );
};

export default Search;