// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import {  GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB47_zIVWBwQbRRnI3cDpPcOnwhc3Z5X7o",
  authDomain: "flatmate-expense-tracker.firebaseapp.com",
  projectId: "flatmate-expense-tracker",
  storageBucket: "flatmate-expense-tracker.appspot.com",
  messagingSenderId: "385223775434",
  appId: "1:385223775434:web:ceb9069a71d527acf41033",
  measurementId: "G-TL7DKBLJV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);
export { auth  };
// const db = getDatabase(app);
// export default db;


export const provider = new GoogleAuthProvider();

export const db = getFirestore();

export default app;