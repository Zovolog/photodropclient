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
  padding: 0 10px 0 10px;
  margin: 0 auto;
  @media screen and (min-width: 1000px) {
    width: 50%;
  }
`;
export const HeaderText = styled.p`
  font-size: 18px;
  font-family: Termina-Bold;
  margin: 10px 0 10px 0;
  text-align: center;
`;
export const HeadText = styled.p`
  font-size: 18px;
  font-family: FuturaNormal;
  margin-bottom: 10px;
  font-weight: 600;
`;
export const NormalText = styled.p`
  font-family: FuturaLight;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 20px;
`;
