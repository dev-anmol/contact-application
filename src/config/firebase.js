// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVIPTqLFrg4w5TBV4vCrg-GCkifkfgXYU",
  authDomain: "vite-contact-9abb3.firebaseapp.com",
  projectId: "vite-contact-9abb3",
  storageBucket: "vite-contact-9abb3.appspot.com",
  messagingSenderId: "888850248516",
  appId: "1:888850248516:web:42df8ab2977c6f080edd11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);