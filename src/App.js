import styled from "styled-components";
import Content from "./Content"
import {
  Router as BrowserRouter,
  Route
} from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
background: #F0F0F2;
box-sizing: border-box;
padding: 25px;
color: #0D0000;
`;

const App = () => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
}

export default App;
