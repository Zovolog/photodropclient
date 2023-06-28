import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 6vh;
  width: 100%;
  border: 1px solid #f1f0ec;
  margin-top: 10px;
  box-sizing: border-box;
  position: relative;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0 15px;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    width: 50%;
    margin: 0 auto;
  }
`;
export const XlText = styled.p`
  font-size: 18px;
  font-family: Termina-Bold;
  color: #262626;
  margin-bottom: 20px;
  text-align: center;
`;

export const LText = styled.p`
  font-family: FuturaNormal;
  font-size: 16px;
  color: #262626;
  text-align: start;
  margin-bottom: 10px;
`;
export const MText = styled.p`
  font-family: FuturaLight;
  font-size: 14px;
  color: #262626;
`;

export const SelfieImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media screen and (min-width: 1000px) {
    width: 150px;
    height: 150px;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin-bottom: 20px;
  @media screen and (min-width: 1000px) {
    width: 150px;
    height: 150px;
  }
`;
export const BtEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: -15px;
  height: 35px;
  width: 35px;
  border: 1px solid #fff;
  box-sizing: border-box;
  background: #3300cc;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 1000px) {
    right: 0px;
  }
`;
export const YourNameBlock = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ceccb5;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  background: inherit;
  outline: none;
  @media screen and (min-width: 1000px) {
    width: 70%;
  }
  cursor: pointer;
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
