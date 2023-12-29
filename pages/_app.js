import Navbar from "@/components/Navbar/navbar"
import "@/styles/globals.css"
import "@/styles/Home.module.css"
import Footer from "@/components/Footer/footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import LoadingBar from "react-top-loading-bar"
import Loader from "@/components/Common/loder"

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40)
      setLoaded(false)
    })

    router.events.on("routeChangeComplete", () => {
      setProgress(100)
      setLoaded(true)
    })
  }, [])

  useEffect(() => {
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 5000)
  }, [])

  return (
    <>
      <LoadingBar
        color="violet"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      {!loaded ? <Loader /> : ""}
      <Navbar />
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </>
  )
}
