import Button from "src/components/Button/Button";
import OptionalHeader from "src/components/Header/OptionalHeader";
import * as S from "src/pages/Landing/LandingStyled";
import { LandingSection, SectionType } from "./constant/landingSection";

const Landing = () => {
  return (
    <S.Container>
      <OptionalHeader />
      <S.BodyContainer>
        <S.HeroContainer>
          <S.HeroText>
            당신의 일정을 관리하고 <br /> 공유 하세요 !
          </S.HeroText>
          <S.SubText>새로운 일정관리 서비스, 타임 세이버를 통해 일정을 관리해보세요</S.SubText>
          <Button exceptionStyle={S.ButtonStyle}>시작하기</Button>
        </S.HeroContainer>
        {LandingSection.map((section: SectionType) => {
          return (
            <S.Section key={section.id}>
              <S.SectionImg src={section.imgUrl} alt={section.alt} />
              <S.SectionDescription>
                <S.SectionTitle>{section.title}</S.SectionTitle>
                <S.SectionSubTitle>{section.subTitle}</S.SectionSubTitle>
              </S.SectionDescription>
            </S.Section>
          );
        })}
      </S.BodyContainer>
    </S.Container>
  );
};

export default Landing;
