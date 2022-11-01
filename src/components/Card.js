import react,{useState} from "react";
import { Modal,Button} from 'react-bootstrap';

const Card=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        <>
            <div className="movie">
                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                   
                    <div className="overview"  onClick={handleShow}>
                        <h1>overview</h1>
                        {movie.info.overview}
                    </div>
                   
                </div>
                <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'12rem'}}src={img_path+movie.info.poster_path} alt=""  />
                      <h3>{movie.info.title}</h3>
                      <h4>IMDb: {movie.info.vote_average}</h4>
                      <h5>Release Date: {movie.info.release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{movie.info.overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
            </div>
            
        </>
    )
}
export default Card;