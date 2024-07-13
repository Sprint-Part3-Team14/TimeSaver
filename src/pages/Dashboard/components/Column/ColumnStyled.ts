import theme from "src/styles/theme";
import styled from "styled-components";

export const DashboardColumnLayout = styled.div`
  padding: 0 2rem;

  &:last-child {
    padding-bottom: 2rem;
  }
`;

export const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
  padding-top: 2rem;
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

export const AddColumn = styled.button`
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  border: 1px solid ${theme.color.gray700};
  width: 100%;
`;

export const ColumnTitle = styled.h3`
  color: ${theme.color.black700};
  font-weight: 500;
`;
