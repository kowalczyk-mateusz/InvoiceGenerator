import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

const Signup = () => {

    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Password do not match!')
        }
        try{ 
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')

        } catch{
            setError('Failed to create an Account')
        }
         setLoading(false)
    }

    return (
        <>
        <Card>
            <CardContainer>
                <Headline>Sign up</Headline>
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
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input type="password" ref={confirmPasswordRef} required/>
                    </FormGroup>
                    <Button type="submit" disabled={loading}>Sign Up</Button>
                </Form>
            </CardContainer>
        </Card>
        <Login>
            Already have an account? <Link to="/login">Log In</Link>
        </Login>
        </>
    );
}

const Card = styled.div`

`
const CardContainer = styled.div`

`
const Headline = styled.h2`

`
const Form = styled.form`

`
const FormGroup = styled.div`

`
const Label = styled.label`

`
const Input = styled.input`

`
const Button = styled.button`

`
const Login = styled.div`

`
const Alert = styled.h3`
color: red;
`
export default Signup;