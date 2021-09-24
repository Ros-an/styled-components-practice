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

function App() {
  return (
    <div>
      <MainTitle>styled components</MainTitle>
      <Button href="https://google.com">Go to google</Button>
      <Input />
      <HeadingSec>Roshan</HeadingSec>
      <Letter>Roshan</Letter>
    </div>
  );
}

export default App;
