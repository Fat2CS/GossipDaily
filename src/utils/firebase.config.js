// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
// création de la base de donnée
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,

  // authDomain: "gossip-91aad.firebaseapp.com",

  // projectId: "gossip-91aad",

  // storageBucket: "gossip-91aad.appspot.com",

  // messagingSenderId: "679725208787",

  // appId: "1:679725208787:web:4fe0c1038d223a1419b026",

  // measurementId: "G-Q17GPKVN7P"

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

// Initialize Firebase

const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;
// export de la base de donnée
export const db = getFirestore();
