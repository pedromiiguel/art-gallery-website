import React from 'react';
import { InstagramLogo, TwitterLogo, FacebookLogo } from 'phosphor-react';
import { Text, Title } from 'components';

import * as S from './styles';

import Container from 'components/Container';

export type FooterProps = {
  backgroundColor: 'black' | 'primary';
  color: 'black' | 'white';
};

const Footer = ({ backgroundColor, color }: FooterProps) => {
  return (
    <S.FooterContainer backgroundColor={backgroundColor}>
      <Container>
        <S.Content>
          <Title as="h4" color={color}>
            Modern <br /> Art Gallery
          </Title>

          <S.TextWrapper>
            <Text size="small" color={color}>
              The Modern Art Gallery is free to all visitors and open seven days
              a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
            </Text>
          </S.TextWrapper>

          <S.SocialMediaContainer color={color}>
            <FacebookLogo size={32} weight="fill" />
            <InstagramLogo size={32} />
            <TwitterLogo size={32} weight="fill" />
          </S.SocialMediaContainer>
        </S.Content>
      </Container>
    </S.FooterContainer>
  );
};

export default Footer;
