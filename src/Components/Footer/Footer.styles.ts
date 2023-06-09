import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #262626;
  position: sticky;
  bottom: 0;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #262626;
  padding: 60px 15px 40px 15px;
  @media screen and (min-width: 1000px) {
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 60px 15px 0 15px;
  }
`;

export const TextMain = styled.p`
  font-size: 18px;
  font-family: Termina-Bold;
  color: #fff;
  margin-bottom: 15px;
`;
export const TextSmall = styled.p`
  font-size: 16px;
  font-family: FuturaLight;
  color: #fff;
  margin-bottom: 20px;
  line-height: 20px;
`;

export const FrameBt = styled.button`
  border: 1px solid #fff;
  font-size: 16px;
  font-family: FuturaNormal;
  background: inherit;
  outline: none;
  text-align: center;
  border-radius: 50px;
  width: 100%;
  color: #fff;
  padding: 15px 0 15px 0;
  margin-bottom: 60px;
  cursor: pointer;
`;
export const HalfBlock = styled.div`
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
