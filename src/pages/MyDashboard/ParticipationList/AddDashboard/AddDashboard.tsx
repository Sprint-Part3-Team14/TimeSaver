import useToggle from "src/hooks/useToggle";
import CreateDashboard from "src/components/Modal/CreateDashboard/CreateDashboard";
import EditIcon from "../../../../components/Icons/EditIcon";
import * as S from "./AddDashboardStyled";

const AddDashboard = () => {
  const {
    isTrue: isOpenCreateDashboard,
    handleTrue: handleOpenCreateDashboard,
    handleFalse: handleCloseCreateDashboard,
  } = useToggle();

  return (
    <>
      {isOpenCreateDashboard && <CreateDashboard handleClose={handleCloseCreateDashboard} />}
      <S.Container onClick={handleOpenCreateDashboard} style={{ cursor: "pointer" }}>
        <S.Title>새로운 대시보드</S.Title>
        <EditIcon width={16} height={16} color="#33333" />
      </S.Container>
    </>
  );
};

export default AddDashboard;
