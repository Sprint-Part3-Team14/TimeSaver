import EditIcon from "../../../../components/Icons/EditIcon";
import * as S from "./AddDashboardStyled";

const AddDashboard = () => {
  return (
    <S.Container>
      <S.Title>새로운 대시보드</S.Title>
      <EditIcon width={16} height={16} color="#33333" />
      {/*아이콘 변경예정*/}
    </S.Container>
  );
};

export default AddDashboard;
