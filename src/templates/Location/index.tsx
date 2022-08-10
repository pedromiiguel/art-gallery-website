import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button, LocationInformation, Footer } from 'components';

import * as S from './styles';

export const LocationTemplate = () => {
  const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
    ssr: false
  });

  return (
    <S.LocationContainer>
      <S.ButtonWrapper>
        <Link href="/" passHref>
          <Button as="a" alignment="left">
            Back to home
          </Button>
        </Link>
      </S.ButtonWrapper>
      <MapWithNoSSR />
      <LocationInformation />
      <Footer backgroundColor="primary" color="black" />
    </S.LocationContainer>
  );
};
