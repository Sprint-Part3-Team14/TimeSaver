import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Button from "src/components/Button/Button";
import PlusIcon from "src/components/Icons/PlusIcon";
import CreateColumn from "src/components/Modal/CreateColumn/CreateColumn";
import useToggle from "src/hooks/useToggle";
import theme from "src/styles/theme";
import { columnQueryKeys } from "src/queryFactory/columnQueryKeys";
import Column from "./components/Column/Column";
import * as S from "./DashboardStyled";
import type { ColumnResponse } from "src/utils/apiResponseType";

const Dashboard = () => {
  const { id: dashboardId } = useParams();

  const { isTrue: isOpenCreate, handleTrue: handleOpenCreate, handleFalse: handleCloseCreate } = useToggle();

  const {
    data: columnListData,
    isLoading,
    error,
  } = useQuery({
    ...columnQueryKeys.list(Number(dashboardId), { dashboardId: Number(dashboardId) }),
    enabled: !!dashboardId,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다: {error.message}</div>;
  if (!columnListData || !columnListData.data) return <div>데이터가 없습니다</div>;

  return (
    <>
      {isOpenCreate && <CreateColumn handleClose={handleOpenCreate} dashboardId={Number(dashboardId)} />}
      <S.DashboardLayout>
        {columnListData.data.map((column: ColumnResponse) => (
          <Column key={column.id} columnTitle={column.title} columnId={column.id} dashboardId={Number(dashboardId)} />
        ))}
        {columnListData.data.length < 10 && (
          <Button styleVariant="white" exceptionStyle={S.AddColumnButtonStyled} onClick={handleCloseCreate}>
            새로운 컬럼 추가하기 <PlusIcon width={22} height={22} color={theme.color.pink900} />
          </Button>
        )}
      </S.DashboardLayout>
    </>
  );
};

export default Dashboard;
