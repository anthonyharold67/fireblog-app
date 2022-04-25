import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, updateProfile,onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "./ToastNotify";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const createUser = async (email,password,navigate,displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {displayName: displayName})
      toastSuccessNotify("User registered successfully")
      navigate("/")
    }
    catch(error) {
    //  alert(error.message)
      toastErrorNotify(error.message)
    }
  
  }

  export const signIn =async (email,password,navigate)=>{
  
  
    try {
      let userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      toastSuccessNotify("User login successfully")

      navigate("/")
    }
    catch(error) {
    //  alert(error.message)
      toastErrorNotify(error.message)
    }
    
  }
  export const userObserver = (setCurrentUser)=>{
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {  
        setCurrentUser(currentUser)
        
        
      } else {
        setCurrentUser(false);
      }
    });
  }
export const logOut = () => {
    signOut(auth);
    // alert("logged out successfully");
    toastSuccessNotify("logged out successfully")
};

export const signUpProvider = (navigate)=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      toastSuccessNotify("User login successfully")
      navigate("/")
  
    }).catch((error) => {
      console.log(error);
      toastErrorNotify(error.message)
    });
}