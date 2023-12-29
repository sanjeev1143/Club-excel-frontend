import React from "react"
import styled from "styled-components"

const MainCont = styled.div`
  margin-top: 32px;
  .label {
    color:gray;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .inner-inp {
    margin-top: 10px;
    background-color: transparent;
    width: 370px;
    color:gray;
    border: none;
    outline: none;
    font-family: "jura";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    @media (max-width: 800px) {
      width: 300px;
    }
  }

  .inp-line {
    margin-top: 2px;
    @media (max-width: 800px) {
      width: 350px;
    }
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
  }
`

function Input({ label, change, name, details }) {
  return (
    <MainCont>
      <div className="input">
        <div className="label">{label}</div>
        <div className="inp-div">
          <input
            className="inner-inp"
            type="text"
            value={details[name]}
            name={name}
            onChange={(e) => change(e)}
          />
        </div>
      </div>
      <div className="inp-line"></div>
    </MainCont>
  )
}

export default Input
