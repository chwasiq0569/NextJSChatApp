import Head from 'next/head'
import Sidebar from "./components/Sidebar"
// import {useAuthState} from "react-firebase-hooks/auth"
export default function Home() {
  // const [user] = useAuthState(auth)
  return (
   <div>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  )
}
