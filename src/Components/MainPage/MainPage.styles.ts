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
export const AlbumBlock = styled.div`
  display: flex;
  overflow-y: auto;
  padding: 0 0 40px 15px;
`;
export const MainText = styled.p`
  font-size: 14px;
  font-family: FuturaNormal;
  margin-top: 15px;
  margin-left: 15px;
  color: #262626;
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const TextInsideImage = styled.p`
  font-family: FuturaLight;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 300%);
  width: 100%;
  color: rgb(255, 255, 255);
  text-align: center;
`;
export const PhotoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: center;
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
