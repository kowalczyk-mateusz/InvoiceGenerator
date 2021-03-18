import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

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
            </CardContainer>
        </Card>
        <div>
            <Link to ="/forgot-password">Forgot password?</Link>
        </div>
        <SignUp>
            Need an account? <Link to="/signup">Sign Up</Link>
        </SignUp>
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
const SignUp = styled.div`

`
const Alert = styled.h3`
color: red;
`
export default Login;