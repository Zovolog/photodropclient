import styled from "styled-components";

export const TextXl = styled.p<{ align: string; margin: string }>`
  font-size: 22px;
  font-family: FuturaNormal;
  text-align: ${(props) => props.align};
  margin-bottom: 18px;
  margin-left: ${(props) => props.margin};
`;
export const TextM = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-family: FuturaLight;
  text-align: center;
  margin-bottom: 18px;
`;
export const GreyLine = styled.div`
  width: 100%;
  height: 5px;
  background: #f4f4f4;
  margin: 40px 0 40px 0;
`;
export const ImageRow = styled.div`
  position: relative;
  margin: 0 10px 0 10px;
  display: flex;
  overflow-y: auto;
`;
