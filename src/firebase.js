// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADQBzcv_ycJS208kbbyPrJ4CjvTJR6BQQ",
  authDomain: "bahen-1180-5be47.firebaseapp.com",
  projectId: "bahen-1180-5be47",
  storageBucket: "bahen-1180-5be47.appspot.com",
  messagingSenderId: "379031697428",
  appId: "1:379031697428:web:8f9e7ecb1eda544f3fcf01",
  measurementId: "G-1F4NQBJVDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        return true;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert('Invalid Email');
          return false;
        } else if(errorCode === 'auth/user-disabled' || errorCode === 'auth/user-not-found') {
          alert("User Doesn't Exist");
          return false;
        } else if(errorCode === 'auth/wrong-password') {
          alert('Wrong Password');
          return false;
        } else if(errorCode === "auth/network-request-failed") {
          alert("Network Request Failed. Please check network connection");
          return false;
        } else {
          alert(errorMessage)
          return false;
        }
    });
}


export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        return true;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert('Invalid Email');
          return false;
        } else if(errorCode === 'auth/weak-password') {
          alert("Password Too Weak");
          return false;
        } else if(errorCode === 'auth/email-already-in-use') {
          alert('Wrong Password');
          return false;
        } else if(errorCode === "auth/network-request-failed") {
          alert("Network Request Failed. Please check network connection");
          return false;
        } else {
          alert(errorMessage)
        }
    });
}