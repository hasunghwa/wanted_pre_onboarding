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
`;

function Tab(){
  const [value, setValue] = useState(0);
  const tabName = useState(["ONE", "TWO", "THREE"]);
  return (
    <>
      <Menus>
        {tabName[0].map((tab, index) => 
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
    </>
  );
}
export default Tab;