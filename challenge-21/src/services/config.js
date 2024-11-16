import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBazM86XMvnSQPsbeTszaWYAqcQOC4eHBo",
    authDomain: "challenge-21-ca68c.firebaseapp.com",
    projectId: "challenge-21-ca68c",
    storageBucket: "challenge-21-ca68c.firebasestorage.app",
    messagingSenderId: "779040597918",
    appId: "1:779040597918:web:4f475ad2b1d4f7db17988f",
    measurementId: "G-PT6G21KBEF"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);