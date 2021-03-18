import React, {useState} from 'react';
import {useAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

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
          <Link to="/update-profile">Update Profile</Link>
          <button  onClick={handleLogout}>Log Out</button>
      </div>
      </>
    );
}

export default Dashboard;