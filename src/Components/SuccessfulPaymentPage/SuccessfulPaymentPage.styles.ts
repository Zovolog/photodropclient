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
export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1000px) {
    width: 50%;
    margin: 0 auto;
  }
`;
export const MainImage = styled.img`
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const BigText = styled.p`
  font-family: Termina-Bold;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
`;

export const UsualText = styled.p`
  font-family: FuturaLight;
  font-size: 18px;
  margin-top: 15px;
`;

export const BtSeePhotos = styled.button`
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
