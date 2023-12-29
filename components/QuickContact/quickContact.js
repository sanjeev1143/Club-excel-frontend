import React from "react"
import styled from "styled-components"

const MainCont = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 88px;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 500px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 801px) and (max-width: 1300px) {
    transform: scale(0.6);
    margin-top: -50px;
  }
  .bg {
    width: 1272px;
    height: 167px;
    flex-shrink: 0;
    background: url("/Rectangle 6.svg");
    border-radius: 90px;
    @media (max-width: 800px) {
      width: 375px;
      height: 100px;
      padding-left: 100px;
      overflow-x: scroll;
      scrollbar-width: thin;
      scroll-size: thin;
    }
    background: radial-gradient(
      2900.76% 50.13% at 50% 53.89%,
      rgba(58, 52, 86, 0.95) 0%,
      #211e2e 100%
    );
    box-shadow: 0px 4px 4px 0px rgba(192, 183, 232, 0.01);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .loc {
    background: url("/location.svg");
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    @media (max-width: 800px) {
      background-size: 30px 30px;
      height: 30px;
      width: 30px;
      flex-shrink: 0;
      padding-left: 40px;
    }
  }

  .bold-text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 800px) {
      font-weight: 500;
      font-size: 13px;
      width: 100px;
    }
  }
  .text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      font-size: 8px;
      font-weight: 500;
    }
  }
  .flex {
    display: flex;

    align-items: center;
    @media (max-width: 800px) {
      gap: 30px;
      margin-right: 30px;
    }
  }
  .phone {
    background: url("/phone-call.svg");
    width: 59px;
    height: 59px;
    flex-shrink: 0;
    color: #c0b7e8;
    @media (max-width: 800px) {
      background-size: 30px 30px;
      height: 30px;
      width: 30px;
      flex-shrink: 0;
      gap: 50px;
    }
  }
  .mail {
    background: url("/mail.svg");
    width: 59px;
    height: 59px;
    flex-shrink: 0;
    color: #c0b7e8;
    @media (max-width: 800px) {
      background-size: 30px 30px;
      height: 30px;
      width: 30px;
      flex-shrink: 0;
    }
  }
  .gap {
    gap: 20px;
    @media (max-width: 800px) {
      gap: 60px;
    }
  }
  .inl {
    @media (max-width: 800px) {
      margin-left: 240px;
    }
  }
`

function QuickContact() {
  return (
    <MainCont>
      <div className="bg">
        <div
          className="flex inl"
        >
          <div className="loc"></div>
          <div className="bold-text">
            Pay Us a Visit
            <div className="text">
              NIST, Berhampur(Ganjam),Odisha
            </div>
          </div>
        </div>
        <div className="flex gap">
          <div className="phone"></div>
          <div className="bold-text">
            Give Us a Call
            <div className="text">(+91) 70086 80932</div>
          </div>
        </div>
        <div className="flex gap">
          <div className="mail"></div>
          <div className="bold-text">
            Send Us a Message
            <div className="text">clubexcel@nist.edu</div>
          </div>
        </div>
      </div>
    </MainCont>
  )
}

export default QuickContact
