import styled from "styled-components";

const MainTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: aliceblue;
`;
const Button = styled.a`
  color: orange;
`;
function App() {
  return (
    <div>
      <MainTitle>styled components</MainTitle>
      <Button href="https://google.com">Go to google</Button>
    </div>
  );
}

export default App;
