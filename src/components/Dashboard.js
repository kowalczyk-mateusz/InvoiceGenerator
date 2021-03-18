import React, {useState} from 'react';
import {useAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {Button, StyledLink} from '../Assets/Styles'
const Dashboard = () => {
    const history = useHistory()
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
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
      <>

      <div>
          <StyledLink to="/update-profile">Update Profile</StyledLink>
          <Button  onClick={handleLogout}>Log Out</Button>
      </div>
      </>
    );
}

export default Dashboard;