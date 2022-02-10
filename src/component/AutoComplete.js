import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box; 

  div:nth-child(1){
    margin-top: 7px;
  }
`;

const Input = styled.input`
  border: none;
  width: 90%;
  padding-left: 10px;
  border-radius: 10px;
  height: 40px;
  font-size: 0.8rem;

  &:focus{
    outline: none;
  }
`;

const Xbutton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 98;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const Suggestions = styled.div`
  position: relative;
  border-top: ${(props) => props.line ? "1px solid rgba(0, 0, 0, 0.2)" : "" };
`;

const Suggestion = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 0.8rem;

  &:hover{
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const words = [ "antique", "vintage", "중고A급", "rustic", "refurbished" ] 
function AutoCompele(){
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [line, setLine] = useState(0);
  const wrapperRef = useRef();
  const handleShadow = (isShadow) => {
    wrapperRef.current.style.boxShadow= isShadow ? "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" : "";
  }

  useEffect(() => {
    setSuggestions([]);
    if(!search){
      setLine(0);
      return
    };
    words.map((word) => {
      if(word.includes(search.toUpperCase()) || word.includes(search.toLowerCase())){
        setLine(1);
        setSuggestions(prev => {
          const copy = Array.from(prev);
          copy.push(word);
          return copy;
        });
      }
    })
    
  } ,[search]);
  
  return (
    <Wrapper ref={wrapperRef}>
      <div style={{position: "relative"}}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          onFocus={() => handleShadow(1)} 
          onBlur={() => handleShadow(0)}
        />
        <Xbutton onClick={() => setSearch("")}>x</Xbutton>
      </div>
      <Suggestions line={line}>
        {suggestions.map((s, index) => 
          <Suggestion
            onClick={(e) => setSearch(e.target.outerText)} 
            key={index}
          >
            {s}
          </Suggestion>
        )}
        </Suggestions>
    </Wrapper>
  );
}

export default AutoCompele;