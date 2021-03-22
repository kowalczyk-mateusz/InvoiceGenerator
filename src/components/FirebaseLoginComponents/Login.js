import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {SignUp, Headline, Label,CardContainer,StyledLink,  ForgotPassword, Input, Button, Alert, Form, FormGroup} from '../../Assets/Styles'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
   async function handleSubmit(e){
        e.preventDefault()

        try{ 
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch{
            setError('Failed to sign in')
        }
         setLoading(false)
    }

    return (
        <>
        <Card>
            <CardContainer>
                <Headline>Log In</Headline>
                {error && <Alert>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" ref={emailRef} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" ref={passwordRef} required/>
                    </FormGroup>
                    <Button type="submit" disabled={loading}>Log In</Button>
                </Form>
                <SignUp>
            Need an account? <StyledLink to="/signup">Sign Up</StyledLink>
        </SignUp>
        <ForgotPassword>
            <StyledLink to ="/forgot-password">Forgot password?</StyledLink>
        </ForgotPassword>
            </CardContainer>
        </Card>


        </>
    );
}

const Card = styled.div`

`


export default Login;