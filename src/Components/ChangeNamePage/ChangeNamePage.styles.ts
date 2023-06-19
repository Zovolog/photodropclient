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

export const Wrapper = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  padding: 0 15px 0 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 18px;
  font-family: Termina-Bold;
  text-align: center;
  color: #262626;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  background: #f4f4f4;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 14px;
  font-size: 16px;
  font-family: FuturaLight;
  width: 90%;
`;
export const ChangeBt = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
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
  margin-top: 20px;
  cursor: pointer;
`;
