import React from 'react';
import { Text, Title, Container } from 'components/';

import * as S from './styles';

const Gallery = () => {
  return (
    <Container>
      <S.GalleryContainer>
        <S.WhiteBox>
          <Title as="h3">Your Day at the Gallery</Title>
          <Text>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </Text>
        </S.WhiteBox>
        <S.ImageGridOne />
        <S.ImageGridTwo />
        <S.ImageGridThree />
        <S.BlackBox>
          <Title as="h3" color="white">
            COME & BE INSPIRED
          </Title>
          <Text color="white">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </Text>
        </S.BlackBox>
      </S.GalleryContainer>
    </Container>
  );
};

export default Gallery;
