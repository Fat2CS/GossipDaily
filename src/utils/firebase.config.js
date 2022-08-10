// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
// création de la base de donnée
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "gossip-91aad.firebaseapp.com",
  projectId: "gossip-91aad",
  storageBucket: "gossip-91aad.appspot.com",
  messagingSenderId: "679725208787",
  appId: "1:679725208787:web:4fe0c1038d223a1419b026",
  measurementId: "G-Q17GPKVN7P"
});

// Initialize Firebase

const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;
// export de la base de donnée
export const db = getFirestore();
