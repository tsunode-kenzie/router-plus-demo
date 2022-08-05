import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2px solid #f10;
  border-radius: 5px;

  font-size: 22px;
  text-decoration: none;
  color: #000;

  span {
    padding: 8px;
  }

  span:last-child {
    background-color: #db1010;

    color: #fff;
    line-height: 75px;
  }

  &:hover {
    transition: all 800ms;
    background-color: #d5090969;
  }
`;
