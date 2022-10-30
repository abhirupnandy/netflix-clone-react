// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_FIREBASE_API_KEY || 'mockKey',
	authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
