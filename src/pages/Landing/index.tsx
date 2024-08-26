import React, { useState } from "react";
import { COLOR_LIST } from "src/components/Modal/CreateDashboard/ColorConstant";
import OptionalHeader from "src/components/Header/OptionalHeader";
import * as S from "src/pages/Landing/LandingStyled";

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/landing1.jpg",
    "/images/landing2.jpg",
    "/images/landing3.jpg",
    "/images/landing4.jpg",
    "/images/landing5.jpg",
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.Container>
      <OptionalHeader />
      <S.MainContent>
        <S.HeroSection>
          <S.SlideShow>
            <S.SlideWrapper>
              <S.SlideImage src={images[currentSlide]} alt="Landing Slide" />
            </S.SlideWrapper>
            <S.PrevButton onClick={handlePrevSlide}>&lt;</S.PrevButton>
            <S.NextButton onClick={handleNextSlide}>&gt;</S.NextButton>
          </S.SlideShow>
          <S.HeroText>당신의 일정을 관리하세요!</S.HeroText>
        </S.HeroSection>
        <S.ColorSection>
          <S.ColorText>여러가지 색으로 일들을 그룹지어 관리하세요!</S.ColorText>
          <S.ColorList>
            {COLOR_LIST.map((color, index) => (
              <S.ColorCircle key={index} color={color} />
            ))}
          </S.ColorList>
        </S.ColorSection>
      </S.MainContent>
    </S.Container>
  );
};

export default MainPage;
