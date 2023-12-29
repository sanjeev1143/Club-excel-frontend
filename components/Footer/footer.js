import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bar {
    width: 0%;
    height: 0px;
    transition-duration: 500ms;
    border: 1.5px solid transparent;
    background: transparent;
  }

  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 50px;
    padding-bottom: 50px;

    margin-top: 50px;
    left: 0;
    bottom: 0;
    width: 100vw;
    text-align: center;
    color: #fff;
    font-family: "Montserrat";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.82px;
  }
  .vector-17 {
    margin-top: 50px;
    margin-bottom: 10px;
    background: url("/Vector 17.svg");
    width: 1269px;
    height: 5px;
    flex-shrink: 0;
    color: linear-gradient(#343045, #c0b7e8, #8176af, #343045);
    margin-bottom: 50px;
  }
  .vector-20 {
    background: url("/Vector 20.svg");
    width: 5px;
    height: 196px;
    flex-shrink: 0;
  }
  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 90px;
    padding-right: 90px;
  }
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: #fff;
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .button {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 214px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
    cursor: pointer;
  }
  .button:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  .send {
    color: #343045;
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .social {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 768px) {
    .footer {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .flex {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    .link {
      text-align: center;
      gap: 20px;
      margin-top: 20px;
    }

    .vector-20 {
      display: none; /* Hide the vertical dividers on smaller screens */
    }
  }
  .sec {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 30px;
    @media (min-width: 800px) and (max-width: 1440px) {
      margin-top: 30px;
      gap: 35px;
    }

    @media (max-width: 800px) {
      margin-top: 0px;
      gap: 5px;
      margin-bottom: 15px;
    }
  }

  .ftxt {
    &:hover {
      .bar {
        width: 100%;
        display: block;
        border: 1.5px solid #8176af;
        background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
      }
    }
    white-space: nowrap;
  }
`

function Footer() {
  const router = useRouter()
  return (
    <MainCont>
      <div className="footer">
        <div className="flex">
          <Link href="/">
            <Image
              loading="lazy"
              src={"/clubexcellogo.png"}
              height={185}
              width={185}
              alt="club-excel"
            />
          </Link>
          <div className="vector-20"></div>
          <div className="sec">
            <div className="link">
              <Link href="/register">
                <div className="pointer ftxt text">
                  REGISTER
                  <div className="bar"></div>
                </div>
              </Link>
            </div>
            <div className="link">
              <Link href="/contact">
                <div className="pointer ftxt text">
                  CONTACT
                  <div className="bar"></div>
                </div>
              </Link>
            </div>

            <div className="link">
              <div className="link">
                <Link href="/contact">
                  <div className="pointer ftxt text">
                    CONTACT
                    <div className="bar"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="vector-20"></div>
          <div className="link">
            <div className="text">SOCIALIZE WITH CLUB EXCEL</div>
            <div className="social">
              <div className="pointer hover">
                <Image
                  loading="lazy"
                  src={"/instagram.svg"}
                  height={32}
                  width={32}
                  alt="instagram"
                  onClick={() =>
                    window.open(
                      "https://instagram.com/_club_excel_?igshid=bG40ZnMxd3lwNDcz"
                    )
                  }
                />
              </div>
              <div className="pointer hover">
                <Image
                  loading="lazy"
                  src={"/twitter1.svg"}
                  height={32}
                  width={32}
                  onClick={() =>
                    window.open(
                      "https://x.com/_club_excel_?t=fMzfK3CcCFMWGtjxdDrqXw&s=09"
                    )
                  }
                  alt="twitter"
                />
              </div>
              <div className="pointer hover">
                <Image
                  loading="lazy"
                  src={"/facebook.svg"}
                  height={32}
                  width={32}
                  alt="facebook"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/excelnist?mibextid=ZbWKwL"
                    )
                  }
                />
              </div>
              <div className="pointer hover">
                <Image
                  loading="lazy"
                  src={"/linkedin.svg"}
                  height={32}
                  width={32}
                  alt="linkedin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/club-excel-nist/"
                    )
                  }
                />
              </div>
            </div>

            <Link href="/contact">
              <div className="button">
                <span className="send">CONTACT US</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="vector-17"></div>
        2023 © Club Excel - ALL RIGHTS RESERVED{" "}
      </div>
    </MainCont>
  )
}

export default Footer
