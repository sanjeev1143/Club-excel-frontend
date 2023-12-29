import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Web from "./web"
import BlockChain from "./blockchain"
import MobileDev from "./mobiledev"
import Ml from "./ml"

const MainCont = styled.div`
  height: 3000px;
  .scroll-section-outer {
    overflow: hidden;
  }

  .scroll-section-inner {
    height: 100vh;
    width: 700vw;
    display: flex;
    position: relative;
  }

  .scroll-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function ScrollSection() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    )

    return () => {
      pin.kill()
    }
  }, [])
  return (
    <MainCont>
      <section className="scroll-section-outer mt30">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scroll-section-inner"
          >
            <div className="scroll-section">
              <Web />
            </div>
            <div className="scroll-section">
              <Web />
            </div>
            <div className="scroll-section">
              <Web />
            </div>
            <div className="scroll-section">
              <Web />
            </div>
            <div className="scroll-section">
              <MobileDev />
            </div>
            <div className="scroll-section">
              <BlockChain />
            </div>
            <div className="scroll-section">
              <Ml />
            </div>
          </div>
        </div>
      </section>
    </MainCont>
  )
}

export default ScrollSection
