import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getColumns } from "src/utils/api";
import { ColumnsListSearch } from "src/utils/apiType";
import * as S from "./DashboardStyled";
import Column from "./components/Column/Column";

export interface ColumnDataType {
  result: "SUCCESS";
  data: ColumnOneType[];
}

export interface ColumnOneType {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const { id: dashboardId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [`dashboard-${dashboardId}`, "columnList"],
    queryFn: async () => {
      const queryParams: ColumnsListSearch = {
        dashboardId: Number(dashboardId),
      };
      return await getColumns(queryParams);
    },
    enabled: !!dashboardId,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다: {error.message}</div>;
  }

  if (!data || !data.data) {
    return <div>데이터가 없습니다</div>;
  }

  return (
    <S.DashboardLayout>
      {data.data.map((column: ColumnOneType) => {
        console.log(column.id);
        return <Column key={column.id} columnTitle={column.title} columnId={column.id} />;
      })}
    </S.DashboardLayout>
  );
};

export default Dashboard;
