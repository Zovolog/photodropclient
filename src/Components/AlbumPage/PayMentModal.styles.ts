import styled from "styled-components";
export const PayMentModal = styled.dialog`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: none;
  margin: 0;
  width: 100%;
  max-width: 100%;
  padding: 0;
  height: 30%;
  @media screen and (min-width: 1000px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 25%;
  }
`;

export const PayMentModalHeaderText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  font-size: 18px;
  font-family: Termina-Bold;
  margin: 5px 0 10px 0;
`;
export const NormalText = styled.p`
  font-family: FuturaLight;
  font-size: 16px;
  width: 70%;
  line-height: 16px;
  margin: 0 10px 0 10px;
`;
export const PayBt = styled.button`
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  background-color: #3300cc;
  font-size: 1.1rem;
  padding: 10px 0 10px 0;
  border-radius: 50px;
  font-family: FuturaNormal;
  cursor: pointer;
  text-align: center;
  margin-top: 30px;
`;
