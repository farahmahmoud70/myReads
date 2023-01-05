import styled from 'styled-components';
import { FlexColumnDiv } from '../../../styles/globalStyles';

export const BookShelfCtr = styled(FlexColumnDiv)`
  justify-content: space-between;
  height: 33.3%;
  width: 100%;
`;
export const BookShelfHeader = styled.div`
  width: 100%;
  height: fit-content;
  font-weight: bold;
  font-size: 20px;
  padding: 8px 0px 0px;
  //   padding: 14px 10px;
  //   margin: 0px 10px;
  border-bottom: 2px solid #d9d9d9;
`;
export const BookCardsCtr = styled.div`
  width: 100%;
  height: 80%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
`;
