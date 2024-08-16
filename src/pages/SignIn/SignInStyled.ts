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
    height: 100vh;
    padding: 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    width: 100%;
    height: auto;
  }
`;

export const SignInfoBox = styled.div`
  width: 1110px;
  height: 100vh;
  background-image: url("/images/SIGN_INFO.png");
  background-size: contain;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignLogoBox = styled.div`
  width: 42.1rem;
  height: 41.6rem;
  background-image: url("/images/SIGN_LOGO.png");
  background-size: cover;
  background-position: center;
`;

export const SignInBox = styled.div`
  width: 810px;
  height: 1080px;
  padding: 145px 156px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    width: 70%;
    height: auto;
    padding: calc(145px * 0.7) calc(156px * 0.7);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 2rem 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: auto 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: 6rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 24px;
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
