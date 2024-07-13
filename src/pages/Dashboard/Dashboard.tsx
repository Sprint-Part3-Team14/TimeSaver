import * as S from "./DashboardStyled";
import Column from "./components/Column/Column";

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

const mockData = {
  cards: [
    {
      id: 9706,
      title: "새로운 카드를 만들어보겠습니다",
      description: "나는 없어진 줄 몰라가지고 한 참 뻘 짓했네",
      tags: ["하잉", "반가워용", "하하"],
      dueDate: "2024-04-30 23:10",
      assignee: {
        id: 3071,
        nickname: "기본 프로필인 척",
        profileImageUrl:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/profile_image/4-14_3071_1714403802399.jpeg",
      },
      imageUrl:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-14_27363_1714401923238.png",
      teamId: "4-14",
      dashboardId: 8137,
      columnId: 27397,
      createdAt: "2024-07-13T17:10:45.808Z",
      updatedAt: "2024-07-13T17:10:45.808Z",
    },
    {
      id: 9707,
      title: "새로운 카드를 만들어보겠습니다",
      description: "나는 없어진 줄 몰라가지고 한 참 뻘 짓했네",
      tags: ["하잉", "반가워용", "하하"],
      dueDate: "2024-04-30 23:10",
      assignee: {
        id: 3071,
        nickname: "기본 프로필인 척",
        profileImageUrl:
          "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/profile_image/4-14_3071_1714403802399.jpeg",
      },
      imageUrl:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-14_27363_1714401977274.png",
      teamId: "4-14",
      dashboardId: 8137,
      columnId: 27397,
      createdAt: "2024-07-13T17:11:05.184Z",
      updatedAt: "2024-07-13T17:11:05.184Z",
    },
  ],
  totalCount: 2,
  cursorId: null,
};

const Dashboard = () => {
  return (
    <S.DashboardLayout>
      <S.Column>
        <Column columnData={mockData} columnTitle={"To do"} />
      </S.Column>
    </S.DashboardLayout>
  );
};

export default Dashboard;
