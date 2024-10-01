import { useNavigate } from "react-router-dom";
import SettingIcon from "src/components/Icons/SettingIcon";
import BorderPlusIcon from "src/components/Icons/BorderPlusIcon";
import Button from "src/components/Button/Button";
import useToggle from "src/hooks/useToggle";
import EditDashboard from "src/components/SidePage/EditDashboard/EditDashboard";
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
  const navigate = useNavigate();
  const { isTrue, handleTrue, handleFalse: handleClose } = useToggle();

  return (
    <>
      {isTrue && (
        <EditDashboard
          handleCloseEditPage={handleClose}
          handleClose={handleClose}
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
                handleTrue();
                console.log("hi");
                console.log(isTrue);
              }}>
              <SettingIcon width={18} height={18} addStyle={S.ButtonIcon} />
              관리
            </Button>
            <Button
              styleVariant="white"
              exceptionStyle={S.CustomButton}
              onClick={() => {
                navigate(`/dashboard/${dashboardId}/invitation`);
              }}>
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
