import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignLogoBox = styled.div`
  width: 33.1rem;
  height: 32.6rem;
  background-image: url("/images/SIGN_LOGO.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    width: 60%;
    height: 100%;
    padding: 0;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: 3rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
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
  color: ${({ theme }) => theme.color.gray900};
`;

export const SignInLink = styled.span`
  color: ${({ theme }) => theme.color.pink900};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.pink400};
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
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.gray900};
  }
`;
