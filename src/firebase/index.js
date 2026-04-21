import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCYuW_jFTxL9c9oHSBALLwdjLEj25SPMi0",
    authDomain: "cirrus-kowalczyk.firebaseapp.com",
    projectId: "cirrus-kowalczyk",
    storageBucket: "cirrus-kowalczyk.appspot.com",
    messagingSenderId: "184816346838",
    appId: "1:184816346838:web:be3827b2b74c9795858b77"
};

 export const app = initializeApp(firebaseConfig);
