import * as firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDUMLpRNKH-w08WqlldCEim7rT9OpSEQHo",
    authDomain: "expensestracker-8c899.firebaseapp.com",
    projectId: "expensestracker-8c899",
    storageBucket: "expensestracker-8c899.appspot.com",
    messagingSenderId: "297118944430",
    appId: "1:297118944430:web:81e5056a2c9b0382c1f13f",
    measurementId: "G-7N2587W31P"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
