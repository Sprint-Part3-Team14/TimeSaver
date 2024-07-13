import SearchIcon from "../../../../components/Icons/SearchIcon";
import * as S from "./SearchBarStyled";

const SearchBar = () => {
  return (
    <S.Container>
      <SearchIcon width={24} height={24} />
      <S.Input placeholder="검색" />
    </S.Container>
  );
};

export default SearchBar;
