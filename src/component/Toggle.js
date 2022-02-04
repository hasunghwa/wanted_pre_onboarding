import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background-color: "gray";
  border-radius: 100px;
  position: relative;
  transition: .2s linear;
`;

const Span = styled.span`
  position: absolute;
  margin-left: 4px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  transition: .5s;
  background-color: white;
`;

function Toggle(){
  const [value, setValue] = useState(false);
  const labelRef = useRef();
  const spanRef = useRef();
  const onClickToggle = (e) => {
    setValue(prev => !prev);
  };
  
  useEffect(() => {
    labelRef.current.style.backgroundColor = value? "blue" : "gray";
    spanRef.current.style.left = value? "52px" : "0px";
  },[value])
  return(
    <>
      <ToggleButton id="toggle" type="checkbox" onChange={onClickToggle}/>
      <Label ref={labelRef} htmlFor="toggle">
        <Span ref={spanRef}></Span>
      </Label>
      <p>Toggle Switch {value? "ON" : "OFF"}</p>
    </>
  );
}

export default Toggle;