import styled from "styled-components";
import theme from "src/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;

  @media ${theme.device.tablet} {
    flex-direction: column;
    width: 100%;
  }

  @media ${theme.device.mobile} {
    padding: 0 1.2rem;
    width: 100%;
  }
`;

export const SignInfoBox = styled.div`
  width: 65%;
  height: 100vh;
  background-image: url("/images/SIGN_INFO.png");
  background-size: cover;
  background-position: center;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

export const SignLogoBox = styled.div`
  width: 33.1rem;
  height: 32.6rem;
  background-image: url("/images/SIGN_LOGO.png");
  background-size: cover;
  background-position: center;

  @media ${theme.device.tablet} {
    width: 22.1rem;
    height: 21.8rem;
  }
`;

export const SignUpBox = styled.div`
  width: 35%;
  min-height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${theme.device.tablet} {
    width: 60%;
    height: 100%;
    padding: 0;
  }

  @media ${theme.device.mobile} {
    height: auto;
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  margin-top: 3rem;

  @media ${theme.device.tablet} {
    max-width: 100%;
  }

  @media ${theme.device.mobile} {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FooterText = styled.div`
  margin-top: 1.6rem;
  font-size: 1.2rem;
  text-align: center;
  color: ${theme.color.gray900};
`;

export const SignInLink = styled.span`
  color: ${theme.color.pink900};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${theme.color.pink400};
  }
`;

export const CheckboxContainer = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  label {
    font-size: ${theme.fontSize.small};
    color: ${theme.color.gray900};
  }
`;
