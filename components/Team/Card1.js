import React from "react"
import Image from "next/image"
import styled from "styled-components"

export const StyleCard1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 259px;

  @media (max-width: 799px) {
    transform: scale(0.7);
    margin-top: -60px;
  }
  .card1 {
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 300px;
    background: url("/card1.png");
    background-size: 230px 300px;
    background-repeat: no-repeat;
  }

  .c-shadow {
    margin-top: 20px;
    width: 335px;
    height: 45px;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(143, 168, 100, 0.406) 0%,
      rgba(104, 126, 67, 0) 72.4%
    );
  }

  .partner-card-txt {
    margin-top: 20px;
    font-family: "Playpen Sans", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    leading-trim: both;
    text-edge: cap;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
  }
  .card1-graphics {
    border-radius: 50%;
  }
`

function Card1({ data }) {
  return (
    <StyleCard1>
      <div className="card1 pointer hover">
        <div className="partners-pic">
          <Image
            loading="lazy"
            className="card1-graphics"
            src={data ? data.img : "/clubexcellogo.png"}
            height={170}
            width={170}
            alt="Image"
            onClick={() => window.open(data.linkedIn)}
          />
        </div>
        <div className="partner-card-txt">
          {data ? data.name : "club excel"}
        </div>
      </div>
      <div className="c-shadow"></div>
    </StyleCard1>
  )
}

export default Card1
