import { Gallery, Main, Footer } from 'components';

import * as S from './styles';

export const HomeTemplate: React.FC = () => {
  return (
    <S.Main>
      <Main />
      <Gallery />
      <Footer backgroundColor="black" color="white" />
    </S.Main>
  );
};
