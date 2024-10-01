import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import UserProfileImage from "src/components/UserProfile/UserProfileImage/UserProfileImage";
import useToggle from "src/hooks/useToggle";
import { HeaderContainer, LinkStyle, Logo } from "src/components/Header/HeaderCommonStyle";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import DashboardInfo from "./components/DashboardInfo";
import ProfilePopup from "./components/ProfilePopup";
import * as S from "./AuthNavStyled";

const DEFAULT_TITLE = "";

const AuthNav = ({ isLanding }: { isLanding: boolean }) => {
  const { id } = useParams<{ id: string }>();
  const { isTrue: isOpenPopup, handleToggle } = useToggle();
  const { data: currentUser } = useQuery(userQueryKeys.current());
  const { data: memberList } = useQuery(dashboardQueryKeys.members({ page: 1, size: 10, dashboardId: Number(id) }));
  const { data: dashboardInfo } = useQuery(dashboardQueryKeys.detail(Number(id)));
  const title = dashboardInfo ? dashboardInfo.title : DEFAULT_TITLE;

  if (!currentUser) return <div>아직 없어</div>;

  return (
    <HeaderContainer isLanding={isLanding}>
      <LinkStyle to="/">
        <Logo />
      </LinkStyle>

      <S.LogoAndTitleContainer>
        <S.DashboardTitle createdByMe={dashboardInfo?.createdByMe || false}>{title}</S.DashboardTitle>
        <S.NavLinks>
          {id && memberList && (
            <DashboardInfo
              dashboardInfo={dashboardInfo}
              createdByMe={dashboardInfo?.createdByMe || false}
              dashboardId={parseInt(id, 10)}
              memberList={memberList}
            />
          )}
          <S.ProfileButton type="button" onClick={handleToggle}>
            <S.ProfileContainer>
              {isOpenPopup && <ProfilePopup />}
              <UserProfileImage profileImageUrl={currentUser.profileImageUrl} addStyle={S.AddProfileImageStyle} />
              <S.ProfileTextStyle>{currentUser.nickname}</S.ProfileTextStyle>
            </S.ProfileContainer>
          </S.ProfileButton>
        </S.NavLinks>
      </S.LogoAndTitleContainer>
    </HeaderContainer>
  );
};

export default AuthNav;
