import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA23bBw5xDeRoXFqo52SxU2e-IhzV9e2gY",
  authDomain: "platzi-badges-92d25.firebaseapp.com",
  databaseURL: "https://platzi-badges-92d25.firebaseio.com",
  projectId: "platzi-badges-92d25",
  storageBucket: "platzi-badges-92d25.appspot.com",
  messagingSenderId: "660231963388",
  appId: "1:660231963388:web:6093f597baa0c43378cd79",
  measurementId: "G-BTPTEHSPRB"
};

firebase.initializeApp(firebaseConfig)

export default firebase