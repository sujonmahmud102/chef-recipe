// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOIvdU0AS3-fSF4T4GhFsfdKiv8w8FEbY",
    authDomain: "chef-recipe-65fc6.firebaseapp.com",
    projectId: "chef-recipe-65fc6",
    storageBucket: "chef-recipe-65fc6.appspot.com",
    messagingSenderId: "103409436143",
    appId: "1:103409436143:web:059025856908fa1895221a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;