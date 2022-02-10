import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
`;

const Input = styled.input`
  margin: 10px 10px;
  width: 150px;
  height: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

function ClickToEdit() {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);
  const nameRef = useRef();
  const ageRef = useRef();

  useEffect(() => {
    if(nameRef.current.value !== name)
      nameRef.current.value = name;
    if(ageRef.current.value !== age)
      ageRef.current.value = age;
  }, [name, age]);

  return (
    <div style={{textAlign: "center"}}>
      <Label>이름</Label>
      <Input ref={nameRef} onBlur={(e) => setName(e.target.value)}/>
      <br />
      <Label>나이</Label>
      <Input ref={ageRef} onBlur={(e) => setAge(e.target.value)}/>
      <p>이름 {name} 나이 {age}</p>
    </div>
  )
}

export default ClickToEdit;