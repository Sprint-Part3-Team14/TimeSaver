import theme from "../../styles/theme";
import PlusIcon from "../../components/Icons/PlusIcon";
import SettingIcon from "../../components/Icons/SettingIcon";
import * as S from "./DashboardStyled";
import Card from "./components/Card";

const mockData = {
  cards: [
    {
      id: 6912,
      title: "하잉",
      description: "ㅋㅅㅋ",
      tags: ["하이", "반갑습니다?", "ㅋㅅㅋ", "어쩌라고!"],
      dueDate: "2024-04-30 23:10",
      assignee: null,
      imageUrl:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-14_27363_1714401923238.png",
      teamId: "4-14",
      dashboardId: 8127,
      columnId: 27363,
      createdAt: "2024-04-29T23:45:27.601Z",
      updatedAt: "2024-04-29T23:45:27.601Z",
    },
    {
      id: 6913,
      title: "하이요",
      description: "반갑슴돠",
      tags: ["왜", "웃지마"],
      dueDate: "2024-10-04 00:59",
      assignee: null,
      imageUrl:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-14_27363_1714401977274.png",
      teamId: "4-14",
      dashboardId: 8127,
      columnId: 27363,
      createdAt: "2024-04-29T23:46:20.269Z",
      updatedAt: "2024-04-29T23:46:20.269Z",
    },
  ],
  totalCount: 2,
  cursorId: null,
};

const Dashboard = () => {
  return (
    <S.DashboardLayout>
      <S.Column>
        <S.DashboardColumnLayout>
          <S.ColumnHeader>
            <S.ColumnName>{mockData.cards[0].title}</S.ColumnName>
            <S.CardCount>{mockData.totalCount}</S.CardCount>
            <S.SettingIconLayout>
              <SettingIcon width={24} height={24} color={theme.color.black600} />
            </S.SettingIconLayout>
          </S.ColumnHeader>
        </S.DashboardColumnLayout>
        <S.DashboardColumnLayout>
          <S.AddColumn>
            <PlusIcon width={22} height={22} color={theme.color.pink900} />
          </S.AddColumn>
          <Card card={mockData.cards} />
        </S.DashboardColumnLayout>
      </S.Column>
    </S.DashboardLayout>
  );
};

export default Dashboard;
