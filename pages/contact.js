import React from "react"
import styled from "styled-components"
import LeftContact from "../components/Contact/LeftContact"
import RightContact from "../components/Contact/RightContact"
import PageMeta from "@/components/Common/PageMeta"

const MainCont = styled.div`
  /* background: #fbfbfb; */
  background: transparent;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  .contact {
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    margin-top: -100px;
    transform: scale(0.5);
  }
  @media (min-width: 1000px) and (max-width: 1400px) {
    transform: scale(0.7);
  }
`

function Contact() {
  return (
    <MainCont>
      <PageMeta
        title="Club Excel - Contact"
        description="Contact with club Excel Team"
        icon="/clubexcellogo.png"
      />
      <div className="contact">
        <LeftContact />
        <RightContact />
      </div>
    </MainCont>
  )
}

export default Contact
