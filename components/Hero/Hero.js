import React, { useEffect, useState } from "react"
import styled from "styled-components"
import RightHero from "./rightHero"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
const NoSSR = dynamic(() => import("./leftHero"), { ssr: false })
import { useInView } from "react-intersection-observer"

const MainCont = styled.div`
  @media (min-width: 801px) and (max-width: 1300px) {
    transform: scale(0.6);
  }
  .center-ref {
    margin-top: -120px;
    height: 600px;
    position: relative;
    @media (max-width: 800px) {
      margin-left: -300px;

      margin-top: -1000px;
      height: 200px;
      width: 800px;
    }
  }
  .Hero-div {
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

function Hero() {
  const [animate, setAnimate] = useState(false)
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }, [inView])
  return (
    <MainCont>
      <div className="Hero-div">
        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-300px)",
          }}
        >
          <NoSSR />
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(300px)",
          }}
        >
          <RightHero />
        </motion.div>

        <div
          ref={ref}
          className="center-ref"
        ></div>
      </div>
    </MainCont>
  )
}

export default Hero
