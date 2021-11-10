import firebase from 'firebase/compat/app';
import { GoogleAuthProvider , getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCryGsLRYl53iYhTb3YMHVHImZ_m5OiPvI",
  authDomain: "asi-midterms.firebaseapp.com",
  projectId: "asi-midterms",
  storageBucket: "asi-midterms.appspot.com",
  messagingSenderId: "941016377300",
  appId: "1:941016377300:web:794c56b43291544f9f9841"
}

console.log(firebase);

const app = firebase.initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();