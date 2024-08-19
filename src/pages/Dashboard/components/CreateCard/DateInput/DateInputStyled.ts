import theme from "src/styles/theme";
import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const DateLabel = styled.label`
  color: ${theme.color.black700};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const DateInputStyle = styled.input`
  font-family: unset;
  color: unset;
  font-size: 1.4rem;
  position: relative;
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray600};
  padding: 1rem 1.5rem;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    background: url("/images/Icons/calender.svg") center no-repeat white;
    cursor: pointer;
  }

  &::-webkit-datetime-edit-ampm-field {
    width: 2rem;
  }
`;
