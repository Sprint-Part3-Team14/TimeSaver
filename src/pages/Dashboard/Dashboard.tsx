import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getColumns } from "src/utils/api";
import { ColumnsListSearch } from "src/utils/apiType";
import * as S from "./DashboardStyled";
import Column from "./components/Column/Column";
import { mockCardListData } from "./mockData";

export interface ColumnDataType {
  cards: CardDataType[];
  totalCount: number;
  cursorId: null;
}

export interface CardDataType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
  imageUrl: string;
  teamId: string;
  dashboardId: number;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const { id: dashboardId } = useParams();
  if (!dashboardId) {
    <>로딩 중</>;
  }
  const { data: columnList } = useQuery({
    queryKey: [`dashboard-${dashboardId}`, "columnList"],
    queryFn: async () => {
      const queryParams: ColumnsListSearch = {
        dashboardId: Number(dashboardId),
      };
      return await getColumns(queryParams);
    },
  });

  return (
    <S.DashboardLayout>
      {columnList.data.map((column: Task) => (
        <Column
          key={column.id}
          columnData={mockCardListData}
          columnTitle={column.title}
          columnId={Number(dashboardId)}
        />
      ))}
    </S.DashboardLayout>
  );
};

export default Dashboard;
