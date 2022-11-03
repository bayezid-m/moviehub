import react,{useState} from 'react';
import { Modal,Button} from 'react-bootstrap';
import { BsHeart, BsHeartFill  } from 'react-icons/bs';
import {auth, db} from '../firebase';
import {setDoc, updateDoc, doc} from 'firebase/firestore';
import { arrayUnion} from 'firebase/firestore';
import {onAuthStateChanged} from 'firebase/auth';

const Card=(item)=>{
    let img_path="https://image.tmdb.org/t/p/w500";
   
    const [show, setShow]=useState(false);
    const [fave, setFave]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    const saveShow = async () => {
          setFave(!fave);
          await updateDoc(doc(db, 'users', "sayem@gmail.com"),{
            savedShows:arrayUnion({
                id: item.info.id,
                title: item.info.title,
                img:item.info.poster_path,
            })
            
        })
      
      };

      const openLinkInNewTab = ( url ) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if ( newTab ) newTab.opener = null;
      }
    return(
        <>
            <div className="movie">
            <div onClick={()=>saveShow()}>{fave ? <BsHeartFill className="heart"/>:<BsHeart className="heart"/>}</div>
                <img src={img_path+item.info.poster_path} className="poster" alt=" "></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{item.info.title}</h4>
                        <p className="rating">{item.info.vote_average}</p>
                    </div>
                   
                    <div className="overview"  onClick={handleShow}>
                        <h1>overview</h1>
                        {item.info.overview}
                    </div>
                   
                </div>
                <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modalbody">
                      <img className="card-img-top" style={{width:'12rem'}}src={img_path+item.info.poster_path} alt=""  />
                      <h3>{item.info.title}</h3>
                      <h4>IMDb: {item.info.vote_average}</h4>
                      <h5>Release Date: {item.info.release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{item.info.overview}</p>
                      <Button className="modalbtn" onClick={ () => openLinkInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')}>Watch trailer</Button>
                          <Button 
                          className="modalbtn"
                          variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Body>
                      <Modal.Footer>
                     
                      </Modal.Footer>
                  </Modal>
            </div>
            
        </>
    )
}
export default Card;