import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box; 
`;

const Tagsdiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;

const Tagdiv = styled.span`
  padding: 10px;
  padding-right: 40px;
  margin-top: 5px;
  margin-left: 5px;
  height: 100%;
  border-radius: 8px;
  background-color: blue;
  color: white;
`;

const Xbutton = styled.span`
  position: absolute;
  top: 0;
  margin: 13px 8px;
  text-align: center;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: white;
  color: black;
  cursor: pointer;
`;

function Tag() {
  const [value, setValue]= useState("");
  const [tags, setTags] = useState([]);
  const TagRef= useRef();
  const InputRef= useRef();
  
  const submitTag = (event) => {
    event.preventDefault(); 
    if(event.target[0].value === "") return;
    setTags(prev => {
      const copy = Array.from(prev);
      copy.push(event.target[0].value);
      return copy;
    });
    setValue("");
  };

  const deleteTag = (index) => {
    setTags(prev => {
      const copy = Array.from(prev);
      copy.splice(index, 1);
      return copy;
    });
  };

  useEffect(() => {
    InputRef.current.style.paddingLeft = (TagRef.current.clientWidth+5)+"px";
  }, [tags]);

  return (
    <>
      <Form onSubmit={submitTag}>
        <Tagsdiv ref={TagRef}>
          {tags.map((value, index) => 
            <Tagdiv>
              {value}
              <Xbutton onClick={() => deleteTag(index)}>x</Xbutton>
            </Tagdiv>
          )}
        </Tagsdiv>
        <Input 
          ref={InputRef} 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder="Press enter to add tags"
        />        
      </Form>
    </>
  );
}
export default Tag;