import { css } from "styled-components";

export const AfterCrownIcon = css`
  &::after {
    content: "";
    min-width: 1.7rem;
    min-height: 1.7rem;
    width: 1.7rem;
    height: 1.7rem;
    background-image: url("/images/Icons/crown.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
  }
`;

export const BeforeCrownIcon = css`
  &::before {
    content: "";
    min-width: 1.7rem;
    min-height: 1.4rem;
    background-image: url("/images/Icons/crown.svg");
    background-size: cover;
    flex-shrink: 0;
  }
`;

export const BeforeEllipseCircle = css`
  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
  }
`;
