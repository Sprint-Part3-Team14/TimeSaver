import React from "react";
import * as S from "src/components/PagiNation/PagiNationStyled";
import ArrowBackwardIcon from "../Icons/ArrowBackwardIcon";
import ArrowForwardIcon from "../Icons/ArrowForwardIcon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <S.PaginationContainer>
      <S.PageButton onClick={handlePrevious} disabled={currentPage === 1}>
        <ArrowForwardIcon width={16} height={16} color={"#D9D9D9"} />
      </S.PageButton>
      <S.PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        <ArrowBackwardIcon width={16} height={16} color={"#D9D9D9"} />
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
