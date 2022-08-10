import styled, { css } from 'styled-components';
import { TextProps } from '.';

type ContainerProps = Pick<TextProps, 'size' | 'color'>;

const containerModifiers = {
  small: () => css`
    font-size: 1.8rem;
    line-height: 2.8rem;
  `,
  medium: () => css`
    font-size: 2.2rem;
    line-height: 3.2rem;
  `
};

export const Container = styled.p<ContainerProps>`
  ${({ theme, size, color }) => css`
    font-family: 'Outfit';
    font-weight: ${theme.font.light};
    color: ${theme.colors[color]};

    ${!!size && containerModifiers[size]()}
  `}
`;
