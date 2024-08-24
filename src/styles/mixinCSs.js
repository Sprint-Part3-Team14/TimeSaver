import styled from "styled-components";

export const AfterCrownIcon = styled.css`
  &::after {
    content: "";
    width: 1.7rem;
    height: 1.4rem;
    background-image: url("/images/Icons/crown.svg");
    background-size: cover;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
