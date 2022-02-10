import { useState } from "react";
import styled from "styled-components";

const Menus = styled.ul`
  display: flex;  
  width: 400px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  list-style:none;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  white: 100%;
  height: 100%;
  padding-left: 5px;
  cursor: pointer;
  flex-grow: 1;
  color: rgba(0, 0, 0, 0.3);
  transition: 0.5s linear;
`;

function Tab(){
  const [value, setValue] = useState(0);
  const tabName = useState(["ONE", "TWO", "THREE"]);

  return (
    <div style={{textAlign: "center"}}>
      <Menus>
        {tabName[0].map((index) => 
          <Menu 
            style={{ 
              backgroundColor: value===index ? "blue" : "", 
              color: value===index ? "white" : "" 
            }}
            onClick={() => setValue(index)}
          >
            Tab{index+1}
          </Menu>
        )}
      </Menus>
      <p>Tab menu {tabName[0][value]}</p>
    </div>
  );
}
export default Tab;