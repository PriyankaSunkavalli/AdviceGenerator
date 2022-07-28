import React from "react";
import styled from "styled-components";
import AdviceCard from "./components/AdviceCard";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const App = () => {
  return (
    <Root>
      <AdviceCard />
    </Root>
  );
};

export default App;
