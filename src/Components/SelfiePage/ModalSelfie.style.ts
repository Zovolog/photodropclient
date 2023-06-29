import styled from "styled-components";

export const ModalAddPhoto = styled.dialog`
  background: #262626;
  max-width: 100%;
  height: 100vh;
  width: 100%;
  max-height: 100vh;
  border: none;
  padding: 0;
  @media screen and (min-width: 1000px) {
    max-width: 100%;
    height: 80vh;
    width: 30%;
    max-height: 100vh;
    border-radius: 15px;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 90px;
  margin-top: 10px;
`;

export const BtCloseModal = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background: none;
  outline: none;
  margin-left: 15px;
  margin-bottom: 17px;
  &::after {
    content: "";
    position: absolute;
    height: 18px;
    width: 1.5px;
    background-color: #ffffff;
    transform: rotate(135deg);
  }
  &::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 1.5px;
    background-color: #ffffff;
    transform: rotate(45deg);
  }
`;

export const ModalHeadText = styled.p`
  font-family: FuturaNormal;
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 100%;
`;

export const ModalNormalText = styled.p`
  font-size: 16px;
  font-family: FuturaLight;
  color: #fff;
  text-align: center;
  width: 100%;
  @media screen and (min-width: 1000px) {
    position: absolute;
    top: 17%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  mask-image: "";
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  width: 280px;
  height: 280px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalBtWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;
export const ModalBtSendPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 170px;
  font-size: 18px;
  color: #000;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: #fff;
  margin-left: 10px;
  font-family: FuturaNormal;
  cursor: pointer;
`;

export const ModalBtRetakePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 170px;
  font-size: 18px;
  color: #fff;
  border-radius: 50px;
  border: none;
  outline: none;
  border: #fff 1px solid;
  font-family: FuturaNormal;
  cursor: pointer;
`;
