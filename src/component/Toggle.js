import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const ToggleButton = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: 50px;
  border-radius: 120px;
  background-color: gray;
  position: relative;
  overflow: hidden;

  ::after {
    content: "";
    height: 50px;
    background-color: blue;
    width: ${(props) => props.value ? "120px": "0" };
    transition: 0.3s linear;
  }
`;

const Span = styled.span`
  position: absolute;
  margin-left: 8px;
  width: 30px;
  height: 30px;
  border-radius: 40px;
  transition: 0.3s linear;
  background-color: white;
  left: ${(props) => props.value ? "76px": "0" };
`;

function Toggle(){
  const [value, setValue] = useState(false);
  const onClickToggle = (e) => {
    setValue(prev => !prev);
  };
  
  return(
    <div style={{textAlign: "center"}}>
      <ToggleButton id="toggle" type="checkbox" onChange={onClickToggle}/>
      <Label htmlFor="toggle" value={value}>
        <Span value={value}></Span>
      </Label>
      <p>Toggle Switch {value? "ON" : "OFF"}</p>
    </div>
  );
}

export default Toggle;