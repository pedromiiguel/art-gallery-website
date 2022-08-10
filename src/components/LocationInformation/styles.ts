import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const LocationInformation = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    padding: ${theme.spacings.huge} 0;

    ${media.lessThan('small')`
      grid-template-columns: 1fr;
    `}
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;
