import React, {useState} from 'react';
import { Modal,Button} from 'react-bootstrap';
const image_url = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return (
        <div className="card text-center bg-secondary mb-3">
         <div className="card-body">
              <img className="card-img-top" src={image_url+poster_path} alt="" />
              <h3>IMDB: {vote_average}</h3>
              <div className="card-body">
              <button className="btn btn-dark"  onClick={handleShow}>View</button>
                  <button type="button" className="btn btn-dark"  >Add to favourite</button>
                  
                  </div>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'16rem'}}src={image_url+poster_path} alt=""  />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
          </div>
        </div>
    );
};

export default MovieCard;