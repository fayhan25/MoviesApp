import React, { useState } from "react";
import { useForm } from "../../shared/components/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/components/utils/validators";
import Input from "../../shared/components/UIElements/Input";
import Button from 'react-bootstrap/Button';
import Card from "../../shared/components/UIElements/Card";
const Auth = props => {
    const [loggedIn, setIsLoggedIn] = useState(true);
 
    const [formState, inputHandler, changeHandler] =  useForm( {
        email: {
          value: '',
          isValid: false
        },
        password: {
          value: '',
          isValid: false
        }}, false);

        
    const loginMode = () => {
        if (!loggedIn){
            changeHandler({
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        else{
            changeHandler(
                {
                ...formState.inputs,
                name: {
                    value : '',
                    isValid : false
                }
            }, false)
        }
        setIsLoggedIn(prevMode => !prevMode)
        }


    const submitForm = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
      }
    return (
        <Card>
            <form className="form-submit" onSubmit={submitForm}>
            {!loggedIn && <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid Name."
                    onInput={inputHandler}
          />}
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password."
                    onInput={inputHandler}
                />


                <Button type="submit" disabled={!formState.isValid}>
                    {loggedIn ? <div>LOGIN</div> : <div>SIGN UP</div>}
                </Button>
                <Button onClick={loginMode}>SWITCH</Button>
            </form>
        </Card>
    )
}

export default Auth