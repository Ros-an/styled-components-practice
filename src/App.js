import styled from "styled-components";

const MainTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: aliceblue;
`;
const Button = styled.a`
  color: orange;
`;
const Input = styled.input`
  border: none;
`;
const HeadingSec = styled.header`
  background: orange;
  height: 5rem;
`;
const Letter = styled.span`
  color: orange;
`;
const Branch1ka1 = styled.article`
  height: 5rem;
  background: blue;
`;
function App() {
  return (
    <div>
      <MainTitle>styled components</MainTitle>
      <Button href="https://google.com">Go to google</Button>
      <Input />
      <HeadingSec>Roshan</HeadingSec>
      <Letter>Roshan</Letter>
      <Branch1ka1>This is branch 1 ka sub branch 1</Branch1ka1>
      Hello my name is roshn
    </div>
  );
}

export default App;
