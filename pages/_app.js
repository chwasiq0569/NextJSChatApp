import {auth, db} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Login from './components/Login';
import Loading from "./components/Loading"
import "../styles/globals.css"
import firebase from "firebase"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)


  useEffect(() => {
    if(user){
      //saving data to database
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL
      }, { merge: true} )
    }
  }, [user])


  if(loading) return <Loading />

  if(!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
