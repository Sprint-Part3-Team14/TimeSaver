import styled from "styled-components";
import ArrowBackwardIcon from "./components/Icons/ArrowBackwardIcon";
import theme from "./styles/theme";

function App() {
  const Test = styled.h2`
    color: ${({ theme }) => theme.color.pink900};
    font-size: 10rem;
  `;
  return (
    <Test>
      열심히 해봅시당 <ArrowBackwardIcon width={40} height={40} color={theme.color.pink400} />
    </Test>
  );
}

export default App;
