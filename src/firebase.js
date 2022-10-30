// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: process.env.REACT_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.REACT_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_FIREBASE_APP_ID,
// };
const firebaseConfig = {
	apiKey: 'AIzaSyCRd2-z3NxcH2w8j3E4IcACOincr38i3xw',
	authDomain: 'netflix-clone-react-898d0.firebaseapp.com',
	projectId: 'netflix-clone-react-898d0',
	storageBucket: 'netflix-clone-react-898d0.appspot.com',
	messagingSenderId: '705040422878',
	appId: '1:705040422878:web:e35838d958e21513f4af4f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);