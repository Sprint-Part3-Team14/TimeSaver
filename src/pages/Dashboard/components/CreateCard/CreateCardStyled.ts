import styled from "styled-components";
import { SidePageBody, SidePageHeader } from "src/components/SidePage/SidePageStyled";
import theme from "src/styles/theme";
import { Button } from "../CardDetail/CardDetailStyled";

export const PageContainer = styled.div``;

export const PageHeader = styled(SidePageHeader)`
  display: flex;
`;

export const PageContent = styled(SidePageBody)``;

export const CloseButton = styled(Button)`
  margin: auto 0;
`;

export const TitleInput = styled.input`
  font-size: 2.4rem;
  font-weight: 700;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 0.1rem solid ${theme.color.gray600};
  padding: 0.5rem;

  &::placeholder {
    color: ${theme.color.gray700};
  }
`;

export const CardAttributes = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
`;

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

export const InputImageLabel = styled.label`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  width: 6rem;

  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray800};
  background-color: ${theme.color.white};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
  }

  &:active {
    background-color: ${theme.color.gray600};
  }
`;

export const CardExplanation = styled.textarea`
  border: 0.1rem solid ${theme.color.gray700};
  flex-grow: 1;
  padding: 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  color: ${theme.color.black900};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
