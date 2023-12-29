import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "next/legacy/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const MainCont = styled.div`
  margin-bottom: 200px;
  .why-box {
  }
  @media (max-width: 800px) {
    margin-top: 100px;
  }

  
  .why-rectangle {
    width: 1381px;
    height: 639px;
    background: url("/Rectangle 28.svg");
    background-size: 1381px 639px;
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
   flex-direction: column;
   justify-content: center;
   margin-right: -110px;
  }
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    transform: scale(0.6);
    margin-top: -400px;
  }

  .head {
    margin-top: -50px;
    color: #fff;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 109px;
    @media (max-width: 800px) {
      margin-top: 20px;
      font-size: 30px;
      margin-left: 140px;
    }
  }
  .text {
    width: 493.072px;
    color: #80ab9e;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin-top: 69px;
    margin-left: 60px;
    line-height: 32px;
    @media (max-width: 800px) {
      text-align: center;
      margin-top: 10px;
      font-size: 15px;
      width: 360px;
      margin-left: 85px;
    }
  }
  .rectangle1 {
    width: 241.429px;
    height: 174.408px;
    flex-shrink: 0;
    border-radius: 11.424px;
    border: 0.2px solid grey;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 23px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    backdrop-filter: blur(19.040151596069336px);
    position: relative;
    @media (max-width: 800px) {
      transform: scale(0.8);
    }
  }
  .center-ref-why {
    margin-top: -300px;
    height: 100px;
  }
  .right {
    width: 500px;
    display: grid;
    grid-template-columns: 241.429px 241.429px;
    grid-column-gap: 25.57px;
    grid-row-gap: 28.12px;
    margin-left: 300px;
    @media (max-width: 800px) {
      transform: scale(0.7);
      margin-left: 0;
      justify-content: center;
      margin-right: -140px;
    }
  }
  .stch-left {
    margin-left: -70px;
  }

  .icon1 {
    background: url("/icon1.svg");
    width: 60.928px;
    height: 60.928px;
    flex-shrink: 0;
  }
  .icon2 {
    background: url("/icon2.svg");
    width: 60.928px;
    height: 60.928px;
    flex-shrink: 0;
  }
  .icon3 {
    background: url("/icon3.svg");
    width: 52.582px;
    height: 45.696px;
    flex-shrink: 0;
  }
  .icon4 {
    background: url("/icon4.svg");
    width: 48.743px;
    height: 48.743px;
    flex-shrink: 0;
  }
  .text1 {
    color: #bdf3ff;
    text-align: center;
    font-family: "Poppins";
    font-size: 16.755px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.59px; 
  }
  .yellow {
    position: absolute;
    top: -80px;
    left: -15px;
    background: url("/yello.svg") no-repeat center;
    width: 206.625px;
    height: 189.108px;
    background-size: 206.625px 189.108px;
    flex-shrink: 0;

    filter: blur(22.848180770874023px);
  }
  .orange {
    position: absolute;
    top: 50px;
    left: -15px;
    background: url("/orange.svg") no-repeat center;
    width: 206.625px;
    height: 189.108px;
    background-size: 206.625px 189.108px;
    flex-shrink: 0;

    filter: blur(22.848180770874023px);
  }
  .blue {
    position: absolute;
    bottom: 80px;
    left: -15px;
    background: url("/blue.svg") no-repeat center;
    width: 206.625px;
    height: 189.108px;
    background-size: 206.625px 189.108px;
    flex-shrink: 0;

    filter: blur(22.848180770874023px);
  }
  .green {
    position: absolute;

    right: -15px;
    background: url("/green.svg") no-repeat center;
    width: 206.625px;
    height: 189.108px;
    background-size: 206.625px 189.108px;
    flex-shrink: 0;
    bottom: -17px;

    filter: blur(22.848180770874023px);
  }
`

function WhyChoose() {
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
      <div className="why-box">
        <motion.div
          transition={{ duration: 1 }}
          animate={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(-100px)" : "translateX(-400px)",
          }}
        >
          <div className="why-rectangle">
            <div className="left">
              <div className="head">Why Choose Us?</div>
              <div className="text">
                Joining Club Excel can be a rewarding and enriching experience
                that helps you grow both professionally and personally. It can
                open doors to exciting opportunities in the tech world and help
                you build a strong foundation for your future career.
              </div>
            </div>
            <div className="right">
              <div className="stch-left rectangle1">
                <div className="icon1"></div>
                <div className="yellow"></div>
                <div className="text1">Innovation</div>
              </div>
              <div className="stch-left rectangle1">
                <div className="icon2"></div>
                <div className="orange"></div>
                <div className="text1">Exploration</div>
              </div>
              <div className="rectangle1">
                <div className="icon3"></div>
                <div className="blue"></div>
                <div className="text1">Collaboration</div>
              </div>
              <div className="rectangle1">
                <div className="icon4"></div>
                <div className="green"></div>
                <div className="text1">
                  Industry connections & <br />
                  skill enhancement
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div
          ref={ref}
          className="center-ref-why"
        ></div>
      </div>
    </MainCont>
  )
}

export default WhyChoose
