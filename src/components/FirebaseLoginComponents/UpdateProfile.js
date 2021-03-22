import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {Login, Headline,CardContainer, StyledLink, Label, Input, Button, Alert, Form, FormGroup} from '../../Assets/Styles'

const UpdateProfile = () => {

    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
  function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Password do not match!')
        }

        const promises = []
        setLoading(true)
        setError('')
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=>{
            history.push('/')
        }).catch(()=>{
            setError('Failed to update account')
        }).finally(()=>{
            setLoading(false)
        })
       
    }

    return (
        <>
        <Card>
            <CardContainer>
                <Headline>Update Profile</Headline>
                {error && <Alert>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" ref={passwordRef}  placeholder='Leave empty to keep the same'/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input type="password" ref={confirmPasswordRef} placeholder='Leave empty to keep the same'/>
                    </FormGroup>
                    <Button type="submit" disabled={loading}>Sign Up</Button>
                </Form>
                <Login>
             <StyledLink to="/">Cancel</StyledLink>
        </Login>
            </CardContainer>
        </Card>

        </>
    );
}

const Card = styled.div`

`

export default UpdateProfile;



