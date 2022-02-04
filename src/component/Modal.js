import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 150px;
  cursor: pointer;
  color: white;
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Modaldiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 50px;
  margin: 0 auto;
  width: 40%;
  height: 20%;
  text-align: center;
  border-radius: 15px;
  background-color: white;
`;

function Modal(){
  const [value, setValue] = useState(false);
  const handleModal = () =>{
    setValue(prev => !prev);
  }
  return (
    <>
      <Button onClick={handleModal}>Open Modal</Button>
      {value ? (
        <Wrapper>
          <Modaldiv>
            <span onClick={handleModal} style={{position: "absolute", top:10 ,cursor:"pointer"}}>x</span>
            <p style={{color: "blue"}}>HELLO CODESTATES!</p>
          </Modaldiv>
        </Wrapper>
      ) : null
      }
    </>
  );
}
export default Modal;