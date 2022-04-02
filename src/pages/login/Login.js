import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyle'
import mealSvg from "../../assets/meal.png"

const Login = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        event.target.username.value == 'fizyomustafa' && event.target.password.value == '1234' ? 
        window.location.href="/turkish" : window.location.href="/login"
    }

    return (
     <LoginContainer>
         <FormContainer>
         <StyledImg src={mealSvg}/>
         <h2 style={{color: 'white'}}>Get Turkish Recipes</h2>
         <p style={{color: 'white'}}>username: fizyomustafa <br /><span>password: 1234</span></p>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput id='username' type="text" placeholder="username" required/>
            <StyledInput id='password' type="password" placeholder="password" required/>
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        </FormContainer>
     </LoginContainer>
    )
}

export default Login
