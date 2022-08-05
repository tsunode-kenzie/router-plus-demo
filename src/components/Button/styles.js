import styled, { css } from 'styled-components';

export const ButtonMain = styled.button`
  border: 1px solid #f10;
  border-radius: 10px;
  padding: 5px;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #dc555585;
      cursor: not-allowed;
    `}
`;
