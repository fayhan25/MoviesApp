import React, { useEffect, useState } from "react";
import {useForm} from "../../shared/components/hooks/form-hook";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/UIElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/components/utils/validators";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const MOVIES = [{
    id : "m1",
    image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    title : "Avatar 2",
    review: "Best Movie I have watched in the visual aspect. I was totally stunned with all the effects believing it was real",
    stars: "5",
    creator: 'u1'
},
{
    id : "m2",
    image: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    title : "Sopranos",
    review: "One of the best tv shows I watched",
    stars: "5",
    creator: 'u2'
}]


const UpdateMovies = props => {

    const movieId = useParams().movieId;

    const [isLoading,setIsLoading] = useState(true);    

    const [formState, inputHandler,changeHandler] =  useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        review: {
          value: '',
          isValid: false
        },
        rating:{
          value: '',
          isValid: false
        }
      },
      false);

      const identifiedPlace = MOVIES.find(p => p.id == movieId);
      useEffect(() => {
      if (identifiedPlace){
        
          changeHandler(
            {
              title: {
                value: identifiedPlace.title,
                isValid: true
              },
              review: {
                value: identifiedPlace.review,
                isValid: true
              },
              rating:{
                value: identifiedPlace.stars,
                isValid: true
              }
            },
            true
          );
          setIsLoading(false);
        }
      }, [changeHandler, identifiedPlace]);  


      const submitForm = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
      }
  

      if (!identifiedPlace) {
        return (
          <div className="center">
            <h2>Could not find place!</h2>
          </div>
        );
      }
    
      if (isLoading) {
        return (
          <div className="center">
            <h2>Loading...</h2>
          </div>
        );
      }


    return (
        <form className="place-form" onSubmit={submitForm}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            value = {formState.inputs.title.value}
            isValid = {formState.inputs.title.isValid}
          />
          <Input
            id="review"
            element="textarea"
            label="Review"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid Review (at least 5 characters)."
            onInput={inputHandler}
            value = {formState.inputs.review.value}
            isValid = {formState.inputs.review.isValid}
          />
          <Input
            id="rating"
            element="input"
            label="Rating"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please give a valid rating"
            onInput={inputHandler}
            value = {formState.inputs.rating.value}
            isValid = {formState.inputs.rating.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Update Movie
          </Button>
        </form>
      );
}

export default UpdateMovies