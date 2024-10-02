import SettingIcon from "src/components/Icons/SettingIcon";
import BorderPlusIcon from "src/components/Icons/BorderPlusIcon";
import Button from "src/components/Button/Button";
import useToggle from "src/hooks/useToggle";
import EditDashboard from "src/components/SidePage/EditDashboard/EditDashboard";
import InviteModal from "src/components/Modal/InviteModal";
import DashboardMember from "./DashboardMember/DashboardMember";
import * as S from "./DashboardInfoStyled";
import type { DashboardInfoData, GetMembersResponse } from "src/utils/apiResponseType";

interface DashboardInfoProps {
  createdByMe: boolean;
  memberList: GetMembersResponse;
  dashboardId: number;
  dashboardInfo: DashboardInfoData | null;
}

const DashboardInfo = ({ createdByMe = false, memberList, dashboardId, dashboardInfo }: DashboardInfoProps) => {
  const {
    isTrue: editDashboard,
    handleTrue: handleOpenEditDashboard,
    handleFalse: handleCloseEditDashboard,
  } = useToggle();
  const { isTrue: isOpenInvitate, handleTrue: handleOpenInvite, handleFalse: handleCloseInvitate } = useToggle();

  return (
    <>
      {isOpenInvitate && <InviteModal handleClose={handleCloseInvitate} dashboardId={dashboardId} />}
      {editDashboard && (
        <EditDashboard
          handleCloseEditPage={handleCloseEditDashboard}
          dashboardId={dashboardId}
          dashboardInfo={dashboardInfo}
        />
      )}
      <S.DashboardInfoContainer>
        {createdByMe && (
          <S.ButtonContainer>
            <Button
              styleVariant="white"
              exceptionStyle={S.CustomButton}
              onClick={() => {
                handleOpenEditDashboard();
              }}>
              <SettingIcon width={18} height={18} addStyle={S.ButtonIcon} />
              관리
            </Button>
            <Button styleVariant="white" exceptionStyle={S.CustomButton} onClick={handleOpenInvite}>
              <BorderPlusIcon width={18} height={18} addStyle={S.ButtonIcon} />
              초대하기
            </Button>
          </S.ButtonContainer>
        )}
        <DashboardMember memberList={memberList} />
      </S.DashboardInfoContainer>
    </>
  );
};

export default DashboardInfo;
