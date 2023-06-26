import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 6vh;
  border: 1px solid #f1f0ec;
  margin-top: 10px;
  box-sizing: border-box;
  position: relative;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BigText = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: #262626;
  font-family: Termina-Bold;
`;

export const ResendCodeBt = styled.button`
  border: none;
  outline: none;
  background: none;
  font-family: FuturaLight;
  color: #3300cc;
  font-size: 16px;
  padding-bottom: 19px;
  cursor: pointer;
`;

export const InputBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 19px;
`;
