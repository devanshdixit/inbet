import React, { useState, useEffect, useContext, createContext } from 'react'
import { database, firebase } from './index'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "./index";
import Router from 'next/router';
import { checkUser, createUser, getUser } from './database';
import { doc, onSnapshot } from 'firebase/firestore';

const authContext = createContext()

const provider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser)
      const res = await checkUser(user.uid);
      if (res) {
        await createUser(user.uid, user);
      } else {
        const data = await getUser(user.uid);
        setUser(data);
      }
      setLoading(false);
      return user
    } else {
      setLoading(false)
      setUser(false)
      return false
    }
  }

  const signinWithGitHub = () => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user))
  }
  const signinWithGoogle = (redirect) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
      .then( async (response) => {
        await handleUser(response.user)

        if (redirect) {
          Router.push(redirect)
        }
      })
  }
  const signout = () => {
    return auth
      .signOut()
      .then(() => handleUser(false))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);
    return () => {
      unsubscribe();
    }
  }, []);

  return {
    user,
    loading,
    signinWithGitHub,
    signinWithGoogle,
    signout,
  }
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}