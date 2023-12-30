// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWkwxLb7v_xYb3YJ5wZSBtbVBDWLpgtgY",
  authDomain: "corechipadmin-40db3.firebaseapp.com",
  projectId: "corechipadmin-40db3",
  storageBucket: "corechipadmin-40db3.appspot.com",
  messagingSenderId: "873220217309",
  appId: "1:873220217309:web:db5c52dce4b121efea3e34",
  measurementId: "G-9SWX5WMTJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage=getStorage(app);