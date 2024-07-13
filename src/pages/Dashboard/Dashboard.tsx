import * as S from "./DashboardStyled";
import Column from "./components/Column/Column";
import { mockCardListData, mockColumnListData } from "./mockData";

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
  return (
    <S.DashboardLayout>
      {mockColumnListData.data.map((column: Task) => (
        <Column key={column.id} columnData={mockCardListData} columnTitle={column.title} />
      ))}
    </S.DashboardLayout>
  );
};

export default Dashboard;
