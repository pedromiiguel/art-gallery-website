import React, { ReactNode } from 'react';

import * as S from './styles';

type TitleProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'black' | 'white' | 'primary';
};

const Title = ({ children, as = 'h1', color = 'black' }: TitleProps) => {
  return (
    <S.Container>
      <S.Content as={as} color={color}>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Title;
