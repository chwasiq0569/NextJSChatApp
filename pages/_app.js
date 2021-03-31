import {auth} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import Login from './components/Login';
import Loading from "./components/Loading"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  if(loading) return <Loading />

  if(!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
