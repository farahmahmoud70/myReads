import styled from 'styled-components';
import { FlexColumnDiv } from '../../../styles/globalStyles';

export const BookCardCtr = styled(FlexColumnDiv)`
  width: 180px;
  // height: calc(100% - 10px);
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 4px;
  position: relative;
`;

export const BookImg = styled.img`
  width: 100%;
  // height: 80%;
`;

export const BookCtr = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
`;

export const BookDetailsCtr = styled(FlexColumnDiv)`
  align-items: center;
  width: 80%;
`;

export const BookDetails = styled.div<{ fontWeight?: string; color?: string }>`
  padding: 4px;
  margin: 2px 0px;
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
`;
