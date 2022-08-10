import React from 'react';

import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  color?: 'gray' | 'white' | 'black';
};

const Text = ({ children, size = 'medium', color = 'gray' }: TextProps) => {
  return (
    <S.Container size={size} color={color}>
      {children}
    </S.Container>
  );
};

export default Text;
