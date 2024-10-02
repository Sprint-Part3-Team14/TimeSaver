import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import * as S from "./AccountStyled";
import EditProfile from "./components/EditProfile/EditProfile";
import EditPassword from "./components/EditPassword/EditPassword";

const Account = () => {
  const { data: userProfileData } = useQuery(userQueryKeys.current());

  if (!userProfileData) {
    return <div />;
  }
  return (
    <div>
      <S.MenuContainer>
        <EditProfile userProfileData={userProfileData} />
        <EditPassword />
      </S.MenuContainer>
    </div>
  );
};

export default Account;
