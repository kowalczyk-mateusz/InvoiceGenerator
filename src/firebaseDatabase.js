import firebase from 'firebase/app'
import 'firebase/database'


var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');


firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
});

    export const db = firebase.firestore();
