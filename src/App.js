import React from 'react';
import Signup from './components/FirebaseLoginComponents/Signup'
import styled from 'styled-components';
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/FirebaseLoginComponents/Login'
import PrivateRoute from './components/FirebaseLoginComponents/PrivateRoute'
import ForgotPassword from './components/FirebaseLoginComponents/ForgotPassword'
import UpdateProfile from './components/FirebaseLoginComponents/UpdateProfile'
import Documents from './components/Documents'
import DocumentId from './components/DocumentId'


function App() {

  
  return (
    <StyledApp>

          <Router>
            <AuthProvider>
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/documents" exact component={Documents}/>
            <PrivateRoute path="/document/:id" exact component={DocumentId} />
            <Container>
            <SignupContainer>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup}  />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            </SignupContainer>
            </Container>
          </Switch>
            </AuthProvider>
          </Router>


    </StyledApp>
  );
}
const StyledApp = styled.div`
width: 100%;
min-height: 100vh;
`
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
