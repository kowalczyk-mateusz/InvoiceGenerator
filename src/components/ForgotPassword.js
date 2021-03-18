import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'

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
            </CardContainer>
        </Card>
        <div>
            <Link to ="/login">Login</Link>
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
export default ForgotPassword;