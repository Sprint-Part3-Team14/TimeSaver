import { MyProfileResponse } from "src/utils/apiResponseType";
import { SidePageHeader, SidePageLayout } from "../SidePage";
import * as S from "./EditAcountStyled";
import EditProfile from "./components/EditProfile/EditProfile";
import EditPassword from "./components/EditPassword/EditPassword";

const EditAccount = ({
  handleClose,
  userProfileData,
}: {
  handleClose: () => void;
  userProfileData: MyProfileResponse;
}) => {
  return (
    <SidePageLayout handleClose={handleClose} addStyle={S.PageSetting}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.AddHeaderStyle}>
        <S.PageTitleStyle>계정 관리</S.PageTitleStyle>
      </SidePageHeader>
      <S.Container>
        <EditProfile userProfileData={userProfileData} />
        <EditPassword />
      </S.Container>
    </SidePageLayout>
  );
};

export default EditAccount;
