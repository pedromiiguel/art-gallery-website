import React from 'react';
import { Container, Title, Text } from 'components';

import * as S from './styles';

const LocationInformation = () => {
  return (
    <S.LocationInformation>
      <Container>
        <S.Content>
          <Title as="h3" color="white">
            Our <br /> location
          </Title>
          <S.Description>
            <Title as="h4" color="primary">
              99 King Street
            </Title>

            <Text color="white">
              Newport <br /> RI 02840 <br />
              United States of America
            </Text>

            <Text color="white">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </Text>
          </S.Description>
        </S.Content>
      </Container>
    </S.LocationInformation>
  );
};

export default LocationInformation;
