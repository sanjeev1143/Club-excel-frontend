import React from "react"
import styled from "styled-components"
import Image from "next/legacy/image"

const MainCont = styled.div`
  width: fit-content;
  margin-right: -800px;
  @media (max-width: 800px) {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: -350px;
  }
  .rightHero {
  }

  .hero-gif {
    @media (max-width: 800px) {
      height: 346px;
      width: 360px;
    }
  }
`

function RightHero() {
  return (
    <MainCont>
      <div className="rightHero">
        <Image
          src={"/Excel_Logo_Anim.gif"}
          alt="Logo"
          height={436}
          width={460}
          className="hero-gif"
          loading="lazy"
        />
      </div>
    </MainCont>
  )
}

export default RightHero
