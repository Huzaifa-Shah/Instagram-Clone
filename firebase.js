// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSoLkHb1SMgmWQDeusEKx-e7cFOr8FOoo",
  authDomain: "instagram-8b983.firebaseapp.com",
  projectId: "instagram-8b983",
  storageBucket: "instagram-8b983.appspot.com",
  messagingSenderId: "640756620746",
  appId: "1:640756620746:web:f377e78505da41ec934333",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app,db,storage};
