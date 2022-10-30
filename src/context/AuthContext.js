import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({});

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			savedMovies: [],
		});
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser({});
			}
		});
		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={{ signUp, login, logout, user }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
	return useContext(AuthContext);
}
