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
  margin-bottom: 10px;
  text-align: start;
`;
export const MText = styled.p`
  font-family: FuturaLight;
  font-size: 14px;
  color: #262626;
`;

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin-bottom: 20px;
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
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
