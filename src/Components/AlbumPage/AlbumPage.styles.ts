import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #f1f0ec;
  margin-top: 10px;
  box-sizing: border-box;
`;
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
export const TextRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;
export const BigText = styled.p`
  font-size: 18px;
  font-family: Termina-Bold;
  color: #262626;
  margin-bottom: 10px;
  padding-top: 10px;
`;
export const SmallText = styled.p`
  font-size: 14px;
  font-family: FuturaLight;
  color: #262626;
`;
export const Dott = styled.div`
  width: 4px;
  height: 4px;
  background-color: #262626;
  border-radius: 50%;
  margin: 0 5px 0 5px;
`;
export const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
export const BtUnlock = styled.button`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 15px;
  font-size: 18px;
  text-align: center;
  font-family: FuturaNormal;
  color: #fff;
  background: #3300cc;
  border-radius: 50px;
  border: none;
  outline: none;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Modal = styled.dialog`
  height: 100vh;
  background-color: #262626;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

export const BtCloseModal = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background: none;
  outline: none;
  margin-bottom: 17px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 1.5px;
    background-color: #ffffff;
    transform: rotate(45deg);
  }
  &::after {
    content: "";
    position: absolute;
    height: 18px;
    width: 1.5px;
    background-color: #ffffff;
    transform: rotate(135deg);
  }
`;

export const DownloadBt = styled.a`
  position: absolute;
  bottom: 50px;
  left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: FuturaLight;
  font-size: 14px;
  color: white;
`;
