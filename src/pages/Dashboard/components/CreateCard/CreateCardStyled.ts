import styled from "styled-components";
import { SidePageBody, SidePageContainer, SidePageHeader } from "src/components/SidePage/SidePageStyled";
import theme from "src/styles/theme";
import { Button } from "../TodoDetail/TodoDetailStyled";

export const PageContainer = styled(SidePageContainer)`
  display: grid;
  grid-template-rows: 7.1rem 1fr;
  grid-template-areas:
    "a"
    "b";
  width: 40%;
`;

export const PageHeader = styled(SidePageHeader)`
  display: flex;
  grid-area: a;
`;

export const PageContent = styled(SidePageBody)`
  grid-area: b;
`;

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

export const DueDayContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ThumbNailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30.5rem;
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.6rem;
  background-color: ${theme.color.gray700};
`;

export const InputImageLabel = styled.label`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;

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

export const InputImage = styled.input`
  display: none;
`;

export const ThumbNailImage = styled.img`
  min-width: 0;
  width: 100%;
  height: 30.5rem;
  object-fit: cover;
  border-radius: 0.6rem;
  background-color: ${theme.color.gray700};
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
