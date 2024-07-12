import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 62rem;

  padding: 3.2rem 2.8rem 2.8rem;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const UploadImageBox = styled.div`
  display: flex;
  width: 18.2rem;
  height: 18.2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 6px;
  background: #f5f5f5;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black700};
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray700};
  background: ${({ theme }) => theme.color.white};

  ::placeholder {
    color: ${({ theme }) => theme.color.gray800};
  }

  font-size: 1.6rem;
`;
export const ButtonBox = styled.div`
  width: 8.4rem;
  align-self: flex-end;
`;
