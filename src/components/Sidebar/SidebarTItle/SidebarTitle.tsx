import AddIcon from "../../Icons/AddIcon";
import * as S from "./SidebarTitleStyeld";

const SidebarTitle = () => {
  return (
    <S.Container>
      <S.Title>Dash Boards</S.Title>
      <S.IconButton>
        <AddIcon width={20} height={20} />
      </S.IconButton>
    </S.Container>
  );
};

export default SidebarTitle;
