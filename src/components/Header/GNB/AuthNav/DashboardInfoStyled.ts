import styled from "styled-components";

export const DashboardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  gap: 4px;
  border-right: 1px solid #6B7280;
  padding-right: 3px;
  color: #1F2937;

  @media (min-width: 768px) {
    height: 38px;
    gap: 23px;
    padding-right: 6px;
  }

  @media (min-width: 1024px) {
    gap: 10px;
  }
`;
