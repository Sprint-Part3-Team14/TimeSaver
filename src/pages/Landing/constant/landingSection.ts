export interface SectionType {
  id: number;
  imgUrl: string;
  alt: string;
  title: string;
  subTitle: string;
}

export const LandingSection = [
  {
    id: 1,
    imgUrl: "/images/landingImg1.png",
    alt: "대시보드 색상 관리",
    title: "여러가지 색으로 대시보드를 구분지어 보세요",
    subTitle: "대시보드 별 색상을 지정하여 색상만으로 구분하고 관리해보세요",
  },
  {
    id: 2,
    imgUrl: "/images/landingImg2.png",
    alt: "대시보드 색상 관리",
    title: "컬럼별로 한 눈에 확인하는 다양한 일정",
    subTitle: "컬럼별로 등록한 할 일을 한 눈에 확인하세요",
  },
  {
    id: 3,
    imgUrl: "/images/landingImg3.png",
    alt: "구성원을 통한 일정 공유",
    title: "구성원 관리로 공유를 더 효율적으로 !",
    subTitle: "대시보드 별 구성원을 관리하여 일정 공유를 더욱 손쉽게 해보세요",
  },
];
