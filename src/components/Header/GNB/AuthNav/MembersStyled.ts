import styled from "styled-components";

export const MembersContainer = styled.ul<{ containerSize: string }>`
  position: relative;
  display: flex;
  height: 42px;
  justify-content: end;
  ${({ containerSize }) => containerSize && containerSize};
`;

export const MemberImage = styled.div<{ positionClass: string }>`
  position: absolute;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  ${({ positionClass }) => positionClass && positionClass};
`;

export const ExtraCount = styled.li`
  position: absolute;
  right: 0;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ff6ee0;
  color: #900;
`;

export const DefaultMemberContainer = styled.div<{ color: string; positionClass: string }>`
  position: absolute;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  ${({ color }) => `background-color: ${color};`}
  ${({ positionClass }) => positionClass && positionClass};
`;
