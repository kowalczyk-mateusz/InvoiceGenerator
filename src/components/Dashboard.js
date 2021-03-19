import React from 'react';
import firebase from 'firebase/app'
import Nav from './Navigation'
import app from '../firebase'
const Dashboard = () => {

    const masno = () =>{
          //  firebase.database().ref('user/'+ 1).set({
          //    name: 'dsada',
          //    dsada: 'dsadsa',
          //  })

          firebase.database().ref('user/'+ 1).on('value', function(snapshot){
            console.log(snapshot.val().name)
          })

        }
    return (
      <>
    <Nav />
    <form>
        <label for='name'>Imie</label>
        <input type="text" name='name'/>
        <label for='name1'>Imie</label>
        <input type="text" name='name1'/>
        <button type="submit">Submit</button>
        <div onClick={masno}>dsadsadsa</div>
    </form>
      </>
    );
}

export default Dashboard;