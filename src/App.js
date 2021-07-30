import styled from "styled-components";
import Content from "./Content"
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from "./NavBar";

const Wrapper = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
background: #F0F0F2;
flex-direction: column;
box-sizing: border-box;
padding: 25px;
color: #0D0000;
overflow: hidden;
`;

const ContentWrapper = styled.div`
position: relative;
width: 100%;
margin: 0 auto;
font-size: 56px;
font-weight: 500;

& a {
    text-decoration: none;
    font-weight: bold;
    color: inherit;
}
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <ContentWrapper>
          <NavBar />
          <Route exact path="/animations/text" component={Content} />
        </ContentWrapper>
      </Router>
    </Wrapper>
  );
}

export default App;
