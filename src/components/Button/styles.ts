import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type ButtonStylesProps = Pick<ButtonProps, 'alignment' | 'color'>;

const buttonAlignment = {
  left: css`
    flex-direction: row-reverse;
  `,
  right: css`
    flex-direction: row;
  `
};

const buttonHoverColor = {
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
  `,
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
  `
};

export const Button = styled.button<ButtonStylesProps>`
  ${({ theme, alignment, color }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;

    color: ${theme.colors.white};

    font-family: ${theme.font.heading};
    font-size: ${theme.font.sizes.large};
    font-weight: 800;

    height: 7.2rem;
    border: none;
    width: max-content;
    letter-spacing: 0.3rem;

    text-decoration: none;

    cursor: pointer;

    ${buttonAlignment[alignment]};

    ${ButtonContent} {
      transition: background ${theme.transition.default};
      background: ${theme.colors[color]};
    }

    ${ButtonArrow} {
      transition: background ${theme.transition.default};

      ${buttonHoverColor[color](theme)};
    }

    &:hover {
      ${ButtonContent} {
        ${buttonHoverColor[color](theme)};
      }

      ${ButtonArrow} {
        background: ${theme.colors[color]};
      }
    }
  `}
`;

export const ButtonContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${theme.spacings.small};
  `}
`;

export const ButtonArrow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;

    padding: 0 ${theme.spacings.xsmall};
  `}
`;
