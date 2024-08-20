import theme from "src/styles/theme";
import styled from "styled-components";

export const DashboardColumnLayout = styled.div`
  box-sizing: border-box;
  width: 35rem;
  height: calc(100vh - 7rem);
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-right: 2px solid ${theme.color.gray600};
  padding: 2rem 2rem;
  flex-shrink: 0;

  &:last-child {
    padding-bottom: 2rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray700};
    border-radius: 0.8rem;
  }
`;

export const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const ColumnName = styled.h3`
  color: ${theme.color.black700};
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:before {
    content: " ";
    min-width: 0.8rem;
    min-height: 0.8rem;
    background-color: ${theme.color.pink900};
    border-radius: 6px;
    display: inline-block;
  }
`;

export const CardCount = styled.div`
  background-color: ${theme.color.gray600};
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 0.4rem;
  display: inline-block;

  color: ${theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const SettingIconLayout = styled.div`
  margin-left: auto;
`;

export const AddCard = styled.button`
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  border: 1px solid ${theme.color.gray700};
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.gray500};
  }

  &:active {
    background-color: ${theme.color.gray600};
  }
`;

export const ColumnTitle = styled.h3`
  color: ${theme.color.black700};
  font-weight: 500;
`;

export const RowCenter = styled.div`
  padding-left: calc(50% - 1.1rem);
`;
