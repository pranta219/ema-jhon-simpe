// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVEm8D7ro1s5tG1TXmPswG5QVpAI2SK64",
    authDomain: "ema-jhon-simpe.firebaseapp.com",
    projectId: "ema-jhon-simpe",
    storageBucket: "ema-jhon-simpe.appspot.com",
    messagingSenderId: "538697315243",
    appId: "1:538697315243:web:08f91c1ec76bf9c212d8ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth