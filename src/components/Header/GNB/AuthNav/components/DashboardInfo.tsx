import { useNavigate } from "react-router-dom";
import SettingIcon from "src/components/Icons/SettingIcon";
import BorderPlusIcon from "src/components/Icons/BorderPlusIcon";
import Button from "src/components/Button/Button";
import Members from "./Members";
import * as S from "./DashboardInfoStyled";
import type { GetMembersResponse } from "src/utils/apiResponseType";

interface DashboardInfoProps {
  createdByMe?: boolean;
  memberList?: GetMembersResponse;
  dashboardId: number;
}

const DashboardInfo = ({ createdByMe = false, memberList, dashboardId }: DashboardInfoProps) => {
  const navigate = useNavigate();

  return (
    <S.DashboardInfoContainer>
      {createdByMe && (
        <S.ButtonContainer>
          <Button
            styleVariant="white"
            exceptionStyle={S.CustomButton}
            onClick={() => {
              navigate(`/dashboard/${dashboardId}/edit`);
            }}>
            <SettingIcon width={18} height={18} />
            관리
          </Button>
          <Button
            styleVariant="white"
            exceptionStyle={S.CustomButton}
            onClick={() => {
              navigate(`/dashboard/${dashboardId}/invitation`);
            }}>
            <BorderPlusIcon width={18} height={18} />
            초대하기
          </Button>
        </S.ButtonContainer>
      )}
      {memberList && <Members members={memberList.members} totalCount={memberList.totalCount} />}
    </S.DashboardInfoContainer>
  );
};

export default DashboardInfo;
