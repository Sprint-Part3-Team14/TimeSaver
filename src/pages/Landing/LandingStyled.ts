import styled from "styled-components";
import theme from "src/styles/theme";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 7rem 1fr;
  grid-template-areas:
    "a"
    "b";
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

export const HeroSection = styled.div`
  position: relative;
  text-align: center;
  grid-area: "b";
`;

export const SlideShow = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  border: 0.2rem solid ${theme.color.pink900};
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
  left: 1rem;
  transform: translateY(-50%);
  background-color: ${theme.color.pink900};
  opacity: 0.6;
  border: none;
  color: ${theme.color.white};
  padding: 1.5rem 1rem;
  cursor: pointer;
  z-index: 1;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
  background-color: ${theme.color.pink900};
  opacity: 0.6;
  border: none;
  color: ${theme.color.white};
  padding: 1.5rem 1rem;
  cursor: pointer;
  z-index: 1;
`;

export const HeroText = styled.h1`
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: 3rem;
  font-weight: 800;
  color: ${theme.color.black800};
  background: linear-gradient(45deg, #ff6b6b, #f06595, #845ef7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ColorSection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const ColorText = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.color.black700};
  margin-top: 2rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #34d399, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ColorList = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 6rem;
  height: 6rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  opacity: 0;
  transform: translateY(2rem);
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FeaturesSection = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 0 2rem;
`;

export const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #ff6b6b, #f06595, #845ef7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`;

export const FeatureCard = styled.div`
  background-color: ${theme.color.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const FeatureText = styled.h3`
  font-size: 1.5rem;
  color: ${theme.color.black800};
`;
