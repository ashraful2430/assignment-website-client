
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqwgeT4WV6NwAliIKDLyXXoK4dZpcm2Z8",
    authDomain: "cars-doctor-958c0.firebaseapp.com",
    projectId: "cars-doctor-958c0",
    storageBucket: "cars-doctor-958c0.appspot.com",
    messagingSenderId: "815479979549",
    appId: "1:815479979549:web:912772ce582e81337b10f4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;