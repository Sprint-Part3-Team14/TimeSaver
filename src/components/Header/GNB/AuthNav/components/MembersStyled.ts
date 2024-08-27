import theme from "src/styles/theme";
import styled from "styled-components";

export const MembersContainer = styled.ul<{ containerSize: string }>`
  position: relative;
  ${theme.displays.rowCenter};
  height: 4.2rem;
  justify-content: flex-end;
  ${({ containerSize }) => containerSize && containerSize};
`;

export const MemberImage = styled.div<{ positionClass: string }>`
  position: relative;
  height: 3.8rem;
  width: 3.8rem;
  ${theme.displays.rowCenter};
  overflow: hidden;
  border-radius: 50%;
  ${({ positionClass }) => positionClass && positionClass};
`;

export const ExtraCount = styled.li`
  position: absolute;
  right: 0;
  height: 3.8rem;
  width: 3.8rem;
  ${theme.displays.rowCenter};
  border-radius: 50%;
  background-color: ${theme.color.pink900};
  color: #900;
`;

export const DefaultMemberContainer = styled.div<{ color: string; positionClass: string }>`
  position: relative;
  bottom: 0.3rem;
  height: 3.8rem;
  width: 3.8rem;
  ${theme.displays.rowCenter};
  margin-top: 0.2rem;
  border-radius: 50%;
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  color: ${theme.color.white};
  ${({ color }) => `background-color: ${color};`}
  ${({ positionClass }) => positionClass && positionClass};
`;
