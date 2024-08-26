import styled from "styled-components";
import theme from "src/styles/theme";

export const cardDetailLayout = `
display: grid;
grid-template-columns: 60% 40%;
padding : 0;

@media ${theme.device.tablet}{
  display : flex;
  flex-direction : column;
}

@media ${theme.device.mobile}{
  display : flex;
  flex-direction : column;
}
`;

export const CardContentStyle = `
  padding : 2.3rem;
  border-right : 0.1rem solid ${theme.color.gray600};
  
  @media ${theme.device.tablet}{
    border-bottom : 0.1rem solid ${theme.color.gray600};
  }

  @media ${theme.device.mobile}{
    border-bottom : 0.1rem solid ${theme.color.gray600};
  }
`;

export const Button = styled.button`
  position: relative;
  cursor: pointer;
`;
