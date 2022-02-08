import './App.css';
import styled from "styled-components";
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoCompele from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  return (
    <Wrapper>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoCompele />
      <ClickToEdit />
   </Wrapper>
  );
}

export default App;
