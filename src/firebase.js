import  firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPQz8T6ZNU8LWTId7ixd0LwTZQSAgmla4",
  authDomain: "ecommerce-e04dd.firebaseapp.com",
  projectId: "ecommerce-e04dd",
  storageBucket: "ecommerce-e04dd.appspot.com",
  messagingSenderId: "937233515092",
  appId: "1:937233515092:web:c5db7da6248404568de3c1"
};
  
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
