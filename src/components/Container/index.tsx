import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
  `}
`;

export default Container;
