import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Card1 from "./Card1"
import { useInView } from "react-intersection-observer"
import { AlumunaiMembers } from "@/mock"

const MainCont = styled.div`
  margin-top: 50px;
  position: relative;
  margin-bottom: 500px;
  @media (min-width: 800px) and (max-width: 1440px) {
    transform: scale(0.5);
    margin-left: 0px;
    margin-top: -70px;
    margin-bottom: -200px;
  }
  @media (min-width: 2560px) {
    transform: scale(1.4);
    margin-top: 551px;
    margin-bottom: 380px;
  }

  @media (max-width: 799px) {
    margin-left: -708px;
    margin-top: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -70px;
  }
  .pnvm {
    @media (max-width: 799px) {
      margin-left: -130px;
    }
  }
  .partnven-box {
    margin-top: 81px;
    width: 1650px;
    display: flex;
    justify-content: center;
    @media (max-width: 799px) {
      margin-top: 0px;
      display: grid;
      justify-content: center;
      grid-template-columns: 120px 120px;
      grid-column-gap: 59.75px;
    }
  }

  .center-item-p {
    @media (max-width: 799px) {
      margin-left: 100px;
    }
  }
  .partnvent {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 799px) {
    }
  }

  .second {
    @media (max-width: 799px) {
      margin-top: -10px;
    }
  }

  .center-ref {
    height: 1400px;
    margin-top: -1800px;

    @media (max-width: 799px) {
      width: 100px;
      position: relative;
      margin-top: -00px;
      height: 3550px;
      margin-bottom: -520px;
      margin-left: -800px;
      z-index: 300;
    }
  }
`

function Alumunai() {
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
      <div className="pnvm">
        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div "
        >
          <div className="partnven-box">
            <div className="">
              <Card1 data={AlumunaiMembers[0]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[1]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[2]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[3]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[4]} />
            </div>
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[5]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="">
              <Card1 data={AlumunaiMembers[6]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[7]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[8]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[9]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[5]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box second">
            <div className="">
              <Card1 data={AlumunaiMembers[10]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[11]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[12]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[13]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[14]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[14]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[15]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[16]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[17]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[18]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[19]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div"
        >
          <div className="partnven-box second">
            <div className="">
              <Card1 data={AlumunaiMembers[20]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[21]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[22]} />
            </div>
            {/* <div className="">
              <Card1 data={AlumunaiMembers[23]} />
            </div> */}
            {/* <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[24]} />
            </div> */}
          </div>
        </motion.div>

        {/* <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[24]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[25]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[26]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[27]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[28]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[29]} />
            </div>
          </div>
        </motion.div> */}
        {/* <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[24]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[25]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[26]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[27]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[28]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[29]} />
            </div>
          </div>
        </motion.div> */}
        {/* <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(500px)",
          }}
          className="parent-motion-div "
        >
          <div className="partnven-box">
            <div className="">
              <Card1 data={AlumunaiMembers[30]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[31]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[32]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[33]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[34]} />
            </div>
            <div className="show-mobile">
              <Card1 data={AlumunaiMembers[35]} />
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0px)" : "translateX(-500px)",
          }}
          className=""
        >
          <div className="partnven-box second">
            <div className="">
              <Card1 data={AlumunaiMembers[36]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[37]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[38]} />
            </div>
            <div className="">
              <Card1 data={AlumunaiMembers[39]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={AlumunaiMembers[35]} />
            </div>
          </div>
        </motion.div> */}
      </div>
      <div
        ref={ref}
        className="  center-ref"
      ></div>
    </MainCont>
  )
}

export default Alumunai
