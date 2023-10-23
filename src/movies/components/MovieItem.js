import React, {useState} from "react";

import Card from "../../shared/components/UIElements/Card"
import { Button } from "react-bootstrap";
import './MovieItem.css';
import Modal from "../../shared/components/UIElements/Modal"
import { Link } from "react-router-dom";
import ImdbMovie from "../../shared/components/UIElements/ImdbMovie";

const MovieItem = props => {
    const [showImdb, setShowImdb] = useState(true);
    const [showDelete, setShowDelete] = useState(true);

    const openImdbModal = () => {
        setShowImdb(true);
    }
    const closeImdbModal = () => {
        setShowImdb(false);
    }

    const openDeleteModal = () => {
        setShowDelete(true);
    }

    const closeDeleteModal = () => {
        setShowDelete(false)
    }

    const deleteItem = () => {
        setShowDelete(false);
        console.log('Deleting')
    }


    return (
        <React.Fragment>
            {showDelete && 
            <Modal 
                id = "deleteModalTarget" 
                ariaLabel="deleteModalTargetLabel" 
                title = "Are you Sure?" 
                onClick = {closeDeleteModal} 
                body = "This Item Will be Deleted if You Proceed"
                deleteModal = {showDelete}
                onClickDelete = {deleteItem}
            />}

            {showImdb && 
            <Modal 
                title = {props.name} 
                onClick = {closeImdbModal}
                id = "exampleModal" 
                ariaLabel="exampleModalLabel" 
                body = {<ImdbMovie title = {props.name}/>}
            />}

            <li className="movie-item">
                <Card className="movie-item__content" >
                        <img className = "card-image" src = {props.image} alt = {props.name}/>
                        <div  className= "movie-item__info" >
                            <h2>{props.name}</h2>
                            <p>{props.review}</p>
                            <p>{props.stars}</p>
                        </div>
                        <div className="movie-item__actions">
                            <Button className="btn-info" onClick={openImdbModal} data-bs-toggle="modal" data-bs-target="#exampleModal"> VIEW ON IMDB</Button>
                            <Button> <Link to ={`/movies/${props.id}`} style={{textDecoration:'none', color: '#fff'}}>EDIT</Link></Button>
                            <Button className="btn-danger" onClick = {openDeleteModal} data-bs-toggle="modal" data-bs-target="#deleteModalTarget">DELETE</Button>
                        </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default MovieItem;