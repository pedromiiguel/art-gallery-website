import React from 'react';
import Link from 'next/link';
import { Button, Text, Title } from 'components';

import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.BlackBox>
        <Title color="white">
          MODERN <br />
          ART GALLERY
        </Title>
      </S.BlackBox>
      <S.ImageBox>
        <Title color="black">
          MODERN <br />
          ART GALLERY
        </Title>
      </S.ImageBox>
      <S.WhiteBox>
        <S.Box>
          <Text>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </Text>
          <Link href="/location" passHref>
            <Button as="button">Our Location</Button>
          </Link>
        </S.Box>
      </S.WhiteBox>
    </S.Container>
  );
};

export default Header;
