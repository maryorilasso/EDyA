// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsevpmIul4PMRyWFLhyRvpzFqWOAKZ7pA",
  authDomain: "challenge-20-6904d.firebaseapp.com",
  projectId: "challenge-20-6904d",
  storageBucket: "challenge-20-6904d.firebasestorage.app",
  messagingSenderId: "810830204747",
  appId: "1:810830204747:web:24f79b28dd522b6c37e2ce"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Configura el comportamiento del proveedor de Google
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { auth, googleProvider };