import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './Assets/GlobalStyles'
import store from './store/store'
import {Provider} from 'react-redux'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
import app from './firebase'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
const rrfProps = {
  firebase: app,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
    <GlobalStyles />
    <App />
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
