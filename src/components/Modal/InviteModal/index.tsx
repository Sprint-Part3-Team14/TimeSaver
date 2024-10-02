import Button from "src/components/Button/Button";
import styled from "styled-components";
import theme from "src/styles/theme";
import { useMutation } from "@tanstack/react-query";
import { postInvitations } from "src/utils/api";
import useInputValue from "src/hooks/useInputValue";
import { InviteDashboard } from "src/utils/apiType";
import ModalBase from "../ModalBase/ModalBase";

const InviteModal = ({ handleClose, dashboardId }: { handleClose: () => void; dashboardId: number }) => {
  const { value, handleChangeValue, handleResetValue } = useInputValue();
  const inviteMutation = useMutation({
    mutationFn: async (body: InviteDashboard) => postInvitations(dashboardId, body),
    onSuccess: () => {
      alert("초대가 완료되었습니다.");
    },
  });

  const handleSendInvitation = () => {
    inviteMutation.mutate({ email: value });
    handleResetValue();
  };

  return (
    <ModalBase handleClose={handleClose} title="초대하기">
      <S.Container>
        <S.InputContainer>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            id="email"
            type="text"
            placeholder="초대할 이메일을 입력해주세요"
            onChange={handleChangeValue}
            value={value}
          />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button type="button" styleVariant="white" exceptionStyle={"padding : 1.5rem; border-radius : 0.6rem;"}>
            취소
          </Button>
          <Button
            type="button"
            exceptionStyle={"padding : 1.5rem; border-radius : 0.6rem;"}
            onClick={handleSendInvitation}>
            초대
          </Button>
        </S.ButtonContainer>
      </S.Container>
    </ModalBase>
  );
};

export default InviteModal;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
  Label: styled.label`
    color: #333236;
    font-size: 1.8rem;
    font-weight: 600;
  `,
  Input: styled.input`
    border-radius: 0.6rem;
    border: 0.1rem solid ${theme.color.gray700};
    background: #fff;
    padding: 1.5rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    min-width: 25.5rem;
    margin-left: auto;
  `,
};
