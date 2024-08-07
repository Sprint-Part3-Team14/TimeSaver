import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import { DetailComments, DetailContainer, DetailHeader } from "./TodoDetailStyled";
import TodoDetailContent from "./TodoDetailContent/TodoDetailContent";

const todoDetailData = {
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
  imageUrl: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-14_27363_1714401923238.png",
  teamId: "4-14",
  columnId: 27397,
  dashboardId: 8137,
  createdAt: "2024-07-13T17:10:45.808Z",
  updatedAt: "2024-07-13T17:10:45.808Z",
};

const TodoDetail = () => {
  return (
    <DetailContainer>
      <DetailHeader>
        <ArrowBackwardIcon width={16} height={16} />
        <KebabIcon width={13} height={16} />
      </DetailHeader>
      <TodoDetailContent todoDetailData={todoDetailData} />
      <DetailComments>댓글 목록</DetailComments>
    </DetailContainer>
  );
};

export default TodoDetail;
