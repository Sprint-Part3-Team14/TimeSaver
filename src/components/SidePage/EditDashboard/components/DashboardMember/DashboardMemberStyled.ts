import styled from "styled-components";
import theme from "src/styles/theme";
import { EditDashboardSection } from "../../EditDashboardStyled";

export const CommonPadding = `
  padding-left : 3.5rem;
  padding-right : 3.5rem;
`;

export const Container = styled(EditDashboardSection)`
  padding: 0;
`;

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${CommonPadding}
  padding-top : 3.5rem;
`;

export const BodyLayout = styled.div``;

export const Title = styled.h2`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const GridText = styled.p`
  color: ${theme.color.gray800};
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 2rem;
  ${CommonPadding}
`;

export const MemberContainer = styled.div`
  min-height: 22rem;
`;

export const MemberOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem;
  ${CommonPadding}

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${theme.color.gray700};
  }
`;

export const AddButtonStyle = `
  width : 8.4rem;
`;
