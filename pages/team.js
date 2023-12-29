import Alumunai from "@/components/Team/alumunai"
import Button from "@/components/Team/button"
import Member from "@/components/Team/member"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import AdvisorCard from "@/components/Team/Advisor"
import { useInView } from "react-intersection-observer"
import PageMeta from "@/components/Common/PageMeta"

const MainCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .Advisor-div {
    margin-top: 88px;
    z-index: 0;
    display: flex;
    align-items: center;
    margin-right: -1000px;
    flex-direction: column;
    @media (min-width: 2560px) {
      transform: scale(1.4);
      margin-top: 551px;
      margin-bottom: 380px;
      margin-right: 0;
    }

    @media (max-width: 800px) {
      margin-top: 83.21px;
      margin-right: 0;
      margin-bottom: -150px;
    }

    @media (min-width: 801px) and (max-width: 1440px) {
      margin-top: 40px;
    }

    .underline {
      width: 190px;
      border: 0.5px solid #bef56e;
      height: 0px;

      @media (max-width: 800px) {
        width: 180px;
      }

      @media (min-width: 801px) and (max-width: 1440px) {
        width: 160px;
        margin-top: 5px;
      }
    }
  }
  .team-heading {
    width: 400px;
    margin-top: 100px;
    margin-bottom: 20px;
    font-family: "Poppins";
    color: white;
    font-weight: 400;
    font-size: 40px;
    @media (max-width: 800px) {
      font-size: 30px;
      width: 300px;
      text-align: center;
    }
    @media (min-width: 801px) and (max-width: 1440px) {
      width: fit-content;
    }
  }

  .shift-left {
    margin-left: -955px;

    @media (max-width: 800px) {
      margin-left: -20px;
      margin-bottom: 0;
    }
    @media (min-width: 800px) and (max-width: 1440px) {
      transform: scale(0.5);
      margin-left: -525px;
      margin-bottom: -400px;
    }
  }
`

function Team() {
  const [state, setState] = useState()
  function handleState() {
    setState(!state)
  }

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
    <div>
      {" "}
      <PageMeta
        title="Club Excel - Members"
        description="Team"
        icon="/clubexcellogo.png"
      />
      <MainCont>
        <div className="shift-left">
          <div className="team-heading">Our Advisor</div>
          <div className="Advisor-div">
            <AdvisorCard
              animate={animate}
              name="R K Baliyar Singh"
              position={"Assistant Prof."}
              imagesrc={"/team/advisor.jpg"}
            />

            <div
              ref={ref}
              className="last-ref"
            ></div>
          </div>

          <div className="team-heading">
            Our Team {state ? "Alumni " : " Members"}
          </div>

          <Button handleState={handleState} />
        </div>
        {!state ? <Member /> : <Alumunai />}
      </MainCont>
    </div>
  )
}

export default Team
