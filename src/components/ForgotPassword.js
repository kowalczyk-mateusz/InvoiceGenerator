import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'
import {SignUp, Headline, Login,  Label, StyledLink,  CardContainer,  Input, Button, Alert, Form, FormGroup} from '../Assets/Styles'

const ForgotPassword = () => {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage ] = useState('')
   async function handleSubmit(e){
        e.preventDefault()

        try{ 
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for more information')
        } catch{
            setError('Failed to reset Password')
        }
         setLoading(false)
    }

    return (
        <>
        <Card>
            <CardContainer>
                <Headline>Reset Password</Headline>
                {error && <Alert>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" ref={emailRef} required/>
                    </FormGroup>
                    <Button type="submit" disabled={loading}>Reset Password</Button>
                </Form>
                <StyledLogin>
            <StyledLink to ="/login">Login</StyledLink>
        </StyledLogin>
        <SignUp>
            Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
        </SignUp>
            </CardContainer>
        </Card>

        </>
    );
}

const Card = styled.div`

`
const StyledLogin = styled.div`
font-size: 1rem;
text-align: center;
padding-top: 0.5rem;
font-weight: bold;
color: black;
`


export default ForgotPassword;