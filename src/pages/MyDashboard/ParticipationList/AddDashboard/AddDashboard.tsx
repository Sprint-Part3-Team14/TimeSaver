import useToggle from "src/hooks/useToggle";
import CreateDashboard from "src/components/Modal/CreateDashboard/CreateDashboard";
import PlusIcon from "src/components/Icons/PlusIcon";
import theme from "src/styles/theme";
import Button from "src/components/Button/Button";
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
      <Button styleVariant="white" onClick={handleOpenCreateDashboard} exceptionStyle={S.AddButtonStyle}>
        <S.Title>새로운 대시보드</S.Title>
        <PlusIcon width={20} height={20} color={theme.color.pink900} />
      </Button>
    </>
  );
};

export default AddDashboard;
