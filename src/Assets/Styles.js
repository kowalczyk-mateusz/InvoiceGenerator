import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Input = styled.input`
font-size: 0.8rem;
font-weight: 500;
padding: 0.5rem;
border-radius: 0.5rem;
border: 1px solid gray;
`
export const Button = styled.button`
color: white;
font-size: 1.2rem;
font-weight: 600;
padding: 0.35rem;
width: 100%;
margin: 0 auto;
background-color: #0067FC;
border-radius: 0.35rem;
border: none;
`
export const Label = styled.label`
font-size: 0.8rem;
font-weight: 500;
padding: 0.25rem;

`
export const Login = styled.div`
text-align: center;
padding-top: 0.5rem;
font-size: 0.8rem;
font-weight: 500;
`
export const Alert = styled.h3`
color: red;
`
export const Headline = styled.h2`
color: #0067FC;
text-align: center;
font-size: 1.75rem;
`
export const Form = styled.form`
display: flex;
flex-direction: column;

`
export const FormGroup = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-bottom: 1rem;
`
export const SignUp = styled.div`
text-align: center;
padding-top: 0.5rem;
font-size: 0.8rem;
font-weight: 500;
`
export const CardContainer = styled.div`
border: 1px solid #e4e4e4;
padding: 2rem 1rem;
border-radius: 1rem;
`
export const ForgotPassword = styled.div`
text-align: center;
padding-top: 0.2rem;
font-size: 0.7rem;
font-weight: 500;
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
font-weight: 600;
`