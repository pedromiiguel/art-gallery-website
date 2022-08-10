import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { FooterProps } from '.';

type FooterContainerProps = Pick<FooterProps, 'backgroundColor'>;

export const FooterContainer = styled.footer<FooterContainerProps>`
  ${({ theme, backgroundColor }) => css`
    width: 100%;
    background: ${theme.colors[backgroundColor]};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};
    align-items: center;

    ${media.lessThan('small')`
      flex-direction: column;
      gap: ${theme.spacings.small};
    `}

    padding: ${theme.spacings.xxlarge} 0;
  `}
`;

export const TextWrapper = styled.div`
  max-width: 43rem;
  width: 100%;
`;

type SocialMediaContainerProps = Pick<FooterProps, 'color'>;

const socialMediaHoverColor = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `
};

export const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    > svg {
      cursor: pointer;
      color: ${theme.colors[color]};
      transition: color ${theme.transition.default};

      &:hover {
        ${socialMediaHoverColor[color](theme)};
      }
    }
  `}
`;
