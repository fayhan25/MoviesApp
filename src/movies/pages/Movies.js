import React from "react";

import Input from "../../shared/components/UIElements/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/components/utils/validators";
import './Movies.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "../../shared/components/hooks/form-hook";
  
  const Movies = () => {

    const inputs = {
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
    }}
    const [formState, inputHandler] =  useForm(inputs, false);
  
    const submitForm = (event) =>{
      event.preventDefault();
      console.log(formState.inputs);
    }
    
    return (
      <form className="place-form" onSubmit = {submitForm}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="review"
          element="textarea"
          label="Review"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid Review (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="rating"
          element="input"
          label="Rating"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please give a valid rating"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    );
  };

export default Movies;