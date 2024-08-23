import styled from "styled-components";

export const MembersContainer = styled.ul<{ containerSize: string }>`
  position: relative;
  ${props => props.theme.displays.rowCenter};
  height: 4.2rem;
  justify-content: flex-end;
  ${({ containerSize }) => containerSize && containerSize};
`;

export const MemberImage = styled.div<{ positionClass: string }>`
  position: absolute;
  height: 3.8rem;
  width: 3.8rem;
  ${props => props.theme.displays.rowCenter};
  overflow: hidden;
  border-radius: 50%;
  ${({ positionClass }) => positionClass && positionClass};
`;

export const ExtraCount = styled.li`
  position: absolute;
  right: 0;
  height: 3.8rem;
  width: 3.8rem;
  ${props => props.theme.displays.rowCenter};
  border-radius: 50%;
  background-color: ${props => props.theme.color.pink900};
  color: #900;
`;

export const DefaultMemberContainer = styled.div<{ color: string; positionClass: string }>`
  position: absolute;
  height: 3.8rem;
  width: 3.8rem;
  ${props => props.theme.displays.rowCenter};
  margin-top: 0.2rem;
  border-radius: 50%;
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: bold;
  color: ${props => props.theme.color.white};
  ${({ color }) => `background-color: ${color};`}
  ${({ positionClass }) => positionClass && positionClass};
`;
