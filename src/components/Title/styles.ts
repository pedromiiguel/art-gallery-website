import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  > h1 {
    font-size: 9.6rem;
    line-height: 8.8rem;

    ${media.lessThan('medium')`
        font-size: 7rem;
        line-height: 7rem;
      `}

    ${media.lessThan('small')`
        font-size: 6rem;
        line-height: 6rem;
      `}
  }

  > h2 {
    font-size: 7rem;
    line-height: 7rem;
  }

  > h3 {
    font-size: 6rem;
    line-height: 6rem;
  }

  > h4 {
    font-size: 3.6rem;
    line-height: 3.6rem;
  }
`;

export const Content = styled.h1`
  ${({ theme, color }) => css`
    font-family: 'Big Shoulders Display';
    font-weight: ${theme.font.bold};
    font-size: 9.6rem;
    line-height: 8.8rem;

    text-transform: uppercase;
    color: ${theme.colors[color]};
  `}
`;
