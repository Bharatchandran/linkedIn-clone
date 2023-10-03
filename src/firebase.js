import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB6UFTGCNtxAaEDtQONxz1G-Cm3L4nSzNQ",
    authDomain: "linkedin-clone-react-b.firebaseapp.com",
    projectId: "linkedin-clone-react-b",
    storageBucket: "linkedin-clone-react-b.appspot.com",
    messagingSenderId: "491417321048",
    appId: "1:491417321048:web:56a91fc3c938c77cd0542d",
    measurementId: "G-JMW7FM6W8W"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore();
