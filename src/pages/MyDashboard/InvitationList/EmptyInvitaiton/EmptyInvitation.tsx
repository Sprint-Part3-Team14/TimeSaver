import UnsubScribeIcon from "../../../../components/Icons/UnsubscribeIcon";

import * as S from "./EmptyInvitationStyled";

const EmptyInvitation = () => {
  return (
    <S.Container>
      <UnsubScribeIcon width={100} height={100} />
      <S.Text>아직 초대받은 대시보드가 없어요</S.Text>
    </S.Container>
  );
};

export default EmptyInvitation;
