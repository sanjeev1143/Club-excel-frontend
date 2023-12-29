import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Card1 from "./Card1"
import { useInView } from "react-intersection-observer"
import { clubMembers } from "@/mock"

export const MainCont = styled.div`
  margin-top: 50px;
  margin-bottom: 500px;
  position: relative;
  @media (min-width: 800px) and (max-width: 1440px) {
    transform: scale(0.5);
    margin-left: 0px;
    margin-top: -450px;
    margin-bottom: -600px;
  }
  @media (min-width: 2560px) {
    transform: scale(1.4);
    margin-top: 551px;
    margin-bottom: 380px;
  }

  @media (max-width: 799px) {
    margin-left: -710px;
    margin-top: 20px;
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
      margin-top: 36.5px;
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
    height: 3000px;
    margin-top: -3150px;
    @media (max-width: 799px) {
      width: 100px;
      position: relative;
      margin-top: -500px;
      height: 5350px;
      margin-bottom: -20px;
      margin-left: -800px;
      z-index: 300;
    }
  }
`

function Member() {
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
              <Card1 data={clubMembers[0]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[1]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[2]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[3]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[4]} />
            </div>
            <div className="show-mobile">
              <Card1 data={clubMembers[5]} />
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
              <Card1 data={clubMembers[6]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[7]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[8]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[9]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={clubMembers[5]} />
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
              <Card1 data={clubMembers[10]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[11]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[12]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[13]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={clubMembers[14]} />
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
              <Card1 data={clubMembers[14]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[15]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[16]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[17]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[18]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[19]} />
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
              <Card1 data={clubMembers[20]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[21]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[22]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[23]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={clubMembers[24]} />
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
              <Card1 data={clubMembers[24]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[25]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[26]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[27]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[28]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[29]} />
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
              <Card1 data={clubMembers[30]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[31]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[32]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[33]} />
            </div>
            <div className="hide-mobile">
              <Card1 data={clubMembers[34]} />
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
              <Card1 data={clubMembers[34]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[35]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[36]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[37]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[38]} />
            </div>
            <div className="">
              <Card1 data={clubMembers[39]} />
            </div>
          </div>
        </motion.div>
      </div>
      <div
        ref={ref}
        className="  center-ref"
      ></div>
    </MainCont>
  )
}

export default Member
