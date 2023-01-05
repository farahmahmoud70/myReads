import styled from 'styled-components';

export const QuickMenuCtr = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  > select {
    z-index: 1;
    width: 100%;
    height: 36px;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
  }
`;
export const QuickMenuBtn = styled.div`
  width: 36px;
  height: 36px;
  background-color: #00b900;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 0;
`;
