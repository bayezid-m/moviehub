import React, { useState, useEffect } from 'react';
import './Account.css';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
const Account = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        onSnapshot(doc(db, 'users', "sayem@gmail.com"), (doc) => {
          setMovies(doc.data()?.savedShows);
        });
      }, []);
      const movieRef = doc(db, 'users', "sayem@gmail.com")
      const deleteShow = async (passedID) => {
          try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
          } catch (error) {
              console.log(error)
          }
      }
    return (
        <div className='mainfav'>
        <div>
            <h1 className='favlist'>My favourite list</h1>
        </div>
        <div className='favcard'>
       {movies.map((item)=>(
<div className='carditem'>
            <img
                className='imgfav'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <p onClick={()=> deleteShow(item.id)} className='cross'><AiOutlineClose /></p>
</div>
       ))}
        </div>
            
        </div>
    );
};

export default Account;