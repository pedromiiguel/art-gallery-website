import { CaretRight, CaretLeft } from 'phosphor-react';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  ElementType
} from 'react';

import * as S from './styles';

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: ReactNode;
  alignment?: 'left' | 'right';
  color?: 'primary' | 'black';
  as?: ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<
  S.ButtonStylesProps,
  ButtonProps
> = ({ children, alignment = 'right', color = 'black', as, ...rest }, ref) => {
  const alignmentArrow = {
    left: <CaretLeft size={24} color="white" />,
    right: <CaretRight size={24} color="white" />
  };

  return (
    <S.Button as={as} alignment={alignment} {...rest} color={color} ref={ref}>
      <S.ButtonContent>{children}</S.ButtonContent>
      <S.ButtonArrow>{alignmentArrow[alignment]}</S.ButtonArrow>
    </S.Button>
  );
};

export default forwardRef(Button);
