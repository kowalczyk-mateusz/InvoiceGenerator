import React from 'react';
import Signup from './components/Signup'
import styled from 'styled-components';
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
function App() {
  
  
  return (
    <>
      <Container>
        <SignupContainer>
          <Router>
            <AuthProvider>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup}  />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
            </AuthProvider>
          </Router>
    </SignupContainer>
    </Container>
    </>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`
const SignupContainer = styled.div`
width: 100%;
max-width: 400px;
`
export default App;
