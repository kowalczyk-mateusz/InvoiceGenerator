import React, {useState}  from 'react';
import styled from 'styled-components'
import {useAuth} from '../context/AuthContext'
import {useHistory, Link} from 'react-router-dom'
const Navigation = () => {
    const history = useHistory()
    const [error, setError] = useState('')
    const {logout} = useAuth()
    async function handleLogout(){
        setError('')
        try{
            history.push('/login')
                await logout()
                
        } catch {
            setError('Failed to log out')
        }
            
    }
    return (
        <Nav>
            <Menu>
                <Link to="/"><ListItem>Wystaw Fakture</ListItem></Link>
                <Link to="/documents"><ListItem>Dokumenty</ListItem></Link>
                <ListItem><UpdateLink to="/update-profile">Zaaktualizuj Profil</UpdateLink></ListItem>
                <ListItem><LogoutButton  onClick={handleLogout}>Wyloguj się</LogoutButton> {error ? error : ''}</ListItem>
            </Menu>
        
          
        </Nav>
    );
}

const Nav = styled.nav`
width: 100%;
height: 5vh;
background-color: #d9edff;
display: flex;
padding: 0rem 5rem;
justify-content: flex-end;
position: sticky;
top: 0;
left: 0;
`
const LogoutButton = styled.button`
border: 1px solid white;
color: white;
background-color: #0067FC;
padding: 0.25rem 0.4rem;
border-radius: 0.4rem;
font-size: 0.8rem;
font-weight: bold;
box-sizing: border-box;
cursor: pointer;
transition: all 0.25s;
&:hover{
color: #0067fc;
background: #fff;
border: 1px solid #0067fc;
}
`
const Menu = styled.ul`
display: flex;
align-items: center;
`
const ListItem = styled.li`
padding: 0rem 0.5rem;
`
const UpdateLink = styled(Link)`
border: 1px solid #0067fc;
color: #0067fc;
background: #fff;
padding: 0.25rem 0.4rem;
font-size: 0.8rem;
font-weight: bold;
border-radius: 0.4rem;
transition: all 0.25s;
&:hover{
    color: white;
    background: #0067fc;
}
`
export default Navigation;