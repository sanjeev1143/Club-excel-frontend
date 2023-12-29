import React from "react"
import styled from "styled-components"
import Image from "next/legacy/image"

const MainCont = styled.div`
  margin-left: 10px;
  @media (max-width: 800px) {
    margin-left: 0px;
    margin-top: 8px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .leftcontact-comp {
    position: relative;
    padding-left: 40px;
    width: 491px;
    height: 647px;
    flex-shrink: 0;
    background: #011c2b;
    border-radius: 12px;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10px;
      padding-left: 0px;
      width: 391px;
      height: 500px;
    }
  }

  .contact-head {
    padding-top: 40px;
    margin-bottom: 6px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 800px) {
      padding-top: 0px;
      margin-bottom: 0px;
    }
  }
  .cmsg {
    padding-top: 6px;
    color: #c9c9c9;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      padding-top: 0px;
    }
  }
  .clogo {
    margin-right: 25px;
    width: 25px;
    height: 25px;
  }
  .ctxt {
    padding-top: 111px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
    }
  }

  .scircle {
    position: absolute;
    width: 138px;
    height: 138px;
    flex-shrink: 0;
    background: rgba(255, 249, 249, 0.13);
    border-radius: 100%;
    bottom: 10%;
    right: 10%;
    @media (max-width: 800px) {
      width: 54px;
      height: 54px;
      flex-shrink: 0;
      bottom: 12%;
      right: 15%;
    }
  }
  .lcircle {
    position: absolute;
    flex-shrink: 0;
    background: rgba(255, 249, 249, 0.13);
    border-radius: 100%;
    width: 269px;
    height: 269px;
    bottom: -17%;
    right: -17%;
    @media (max-width: 800px) {
      width: 269px;
      height: 269px;
      flex-shrink: 0;
      bottom: -20%;
      right: -27%;
    }
  }
  .emal {
    padding-top: 50px;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .loc {
    display: flex;
    align-items: center;
    padding-top: 50px;
    width: 288px;
    color: #fff;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }
  .social-logo {
    margin-top: 100px;
    margin: 39px;
    display: flex;
    align-items: center;
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    margin-left: 2px;
    gap: 10px;
    cursor: pointer;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -30px;
    }
  }
  .wm221 {
    @media (max-width: 800px) {
      text-align: center;
      width: 231px;
    }
  }
  .cursor {
  }
`

function LeftContact() {
  return (
    <MainCont>
      <div className="leftcontact-comp">
        <div className="contact-head">Contact Information</div>
        <div className="cmsg">Say something to start a live chat!</div>
        <div className="ctxt">
          <Image
            src={"/phonecall.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          +91 7008680932
        </div>
        <div className="emal">
          <Image
            src={"/ic_sharp-email.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          clubexcel@nist.edu
        </div>
        <div className="loc">
          <Image
            src={"/carbon_location-filled.svg"}
            height={24}
            width={24}
            className="clogo"
            alt="contact"
          />
          <div className="wm221"> NIST, Berhampur</div>
        </div>
        <div className="scircle"></div>
        <div className="lcircle"></div>
        <div className="social-logo">
          <Image
            src={"/facebook.svg"}
            height={34}
            width={34}
            className="clogo"
            alt="contact"
            onClick={() =>
              window.open("https://www.facebook.com/excelnist?mibextid=ZbWKwL")
            }
          />

          <Image
            src={"/instagram.svg"}
            height={34}
            width={34}
            className="clogo"
            alt="contact"
            onClick={() =>
              window.open(
                "https://instagram.com/_club_excel_?igshid=bG40ZnMxd3lwNDcz"
              )
            }
          />
          <Image
            src={"/linkedin.svg"}
            height={34}
            width={34}
            className="clogo"
            alt="contact"
            onClick={() =>
              window.open("https://www.linkedin.com/company/club-excel-nist/")
            }
          />

          <Image
            src={"/twitter1.svg"}
            height={34}
            width={34}
            className="clogo"
            alt="twitter"
            onClick={() =>
              window.open(
                "https://twitter.com/_club_excel_?t=NZYnMwtWRqRuOHymXVpY9Q&s=09"
              )
            }
          />
        </div>
      </div>
    </MainCont>
  )
}

export default LeftContact
