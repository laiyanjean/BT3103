import firebase from 'firebase';

const firebaseConfig = {
    /** W8 Problem 2
     * Updating with my database settings
     */


  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;