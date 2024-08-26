import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 2rem;
`;

export const HeroSection = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;

export const SlideShow = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

export const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  z-index: 1;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  padding: 1rem;
  cursor: pointer;
  z-index: 1;
`;

export const HeroText = styled.h1`
  margin-top: 2rem;
  font-size: 2rem;
  color: #333;
`;

export const ColorSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export const ColorText = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const ColorList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
