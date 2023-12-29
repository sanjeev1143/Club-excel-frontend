import React, { useState } from "react"
import styled from "styled-components"
import Image from "next/legacy/image"

const MainCont = styled.div`
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
  z-index: 10000000000000000000000000000000000000000000000000000;
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #28272a;
  }

  .btn {
    position: relative;
    width: 200px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    letter-spacing: 2px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.35);
    border-left: 0.5px solid rgba(255, 255, 255, 0.35);
    padding-left: 40px;
    transition: 0.5s;
    overflow: hidden;

    &.clicked {
      padding-left: 0;
      padding-right: 40px;
      color: rgba(255, 255, 255, 1);
      transition: 0.5s;
    }

    .circle {
      position: absolute;
      left: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #04fe4d;
      transition: 0.5s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1a191d;
      font-size: 1.5rem;

      &.clicked {
        left: calc(100% - 55px);
        transform: translate(0);
        transition: 0.75s ease-in-out;
      }
    }
  }
`

function Button({ handleState }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <MainCont>
      <div
        className={`btn ${isClicked ? "clicked" : ""}`}
        onClick={() => {
          setIsClicked(!isClicked)
          handleState()
        }}
      >
        {isClicked ? "Member" : "Alumni "}
        <span className={`circle ${isClicked ? "clicked" : ""}`}>
          <Image
          alt="button"
            src={"/arrow-right-solid.svg"}
            height={24}
            width={24}
          />
        </span>
      </div>
    </MainCont>
  )
}

export default Button
