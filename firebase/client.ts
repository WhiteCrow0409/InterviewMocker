// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps ,getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuJ_14dPEZs5n2mMReK10Ow0lXOkvLwh0",
  authDomain: "job-osthadi.firebaseapp.com",
  projectId: "job-osthadi",
  storageBucket: "job-osthadi.firebasestorage.app",
  messagingSenderId: "744054171885",
  appId: "1:744054171885:web:4437ddea6099ab6a4ac4e4",
  measurementId: "G-75B0NXE4YB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)