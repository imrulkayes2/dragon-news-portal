// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNxneni076TdQ1sEEtBNR7rlfUoby5ptk",
    authDomain: "dragon-news-a5338.firebaseapp.com",
    projectId: "dragon-news-a5338",
    storageBucket: "dragon-news-a5338.appspot.com",
    messagingSenderId: "799355374698",
    appId: "1:799355374698:web:1e76426323ab9157bece13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;