import useToggle from "src/hooks/useToggle";
import CreateDashboard from "src/components/Modal/CreateDashboard/CreateDashboard";

import AddIcon from "src/components/Icons/AddIcon";

import * as S from "./SidebarTitleStyeld";

const SidebarTitle = () => {
  const {
    isTrue: isOpenCreateDashboard,
    handleTrue: handleOpenCreateDashboard,
    handleFalse: handleCloseCreateDashboard,
  } = useToggle();
  return (
    <>
      {isOpenCreateDashboard && <CreateDashboard handleClose={handleCloseCreateDashboard} />}
      <S.Container>
        <S.Title>Dash Boards</S.Title>
        <S.IconButton type="button" onClick={handleOpenCreateDashboard}>
          <AddIcon width={20} height={20} />
        </S.IconButton>
      </S.Container>
    </>
  );
};

export default SidebarTitle;
