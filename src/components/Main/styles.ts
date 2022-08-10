import styled, { css } from 'styled-components';
import * as TitleStyles from 'components/Title/styles';

import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  grid-template-areas: 'black image white';

  ${media.lessThan('medium')`
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'image white'; 
  `}

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.6fr;
    grid-template-areas: 
    'image'
    'white'
    ; 
  `}
`;

export const BlackBox = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    grid-area: black;

    ${media.lessThan('medium')` 
      display: none;
    `}

    ${TitleStyles.Container} {
      ${media.greaterThan('medium')`
        position: absolute;
        top: 30%;
        transform: translateY(-30%);
        right: -160px;
      `}
    }

    background: ${theme.colors.black};
  `}
`;

export const ImageBox = styled.div`
  grid-area: image;

  ${media.greaterThan('medium')`
      position: relative;
      overflow: hidden;
  `}

  ${TitleStyles.Container} {
    ${media.greaterThan('medium')`
      position: absolute;
      top: 30%;
      transform: translateY(-30%);
      left: -290px;
    `}

    ${media.lessThan('medium')`
      position: absolute;
      width: max-content;
      left: 50%;
      top: 30%;
      transform: translate(-50%,-30%);
    `}

    ${media.lessThan('small')`
      position: absolute;
      width: max-content;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    `}
  }

  background-position: center center;
  background-image: url('/images/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WhiteBox = styled.div`
  ${({ theme }) => css`
    grid-area: white;

    ${media.greaterThan('medium')`
      position: relative;
    `}

    background: ${theme.colors.white};
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      position: absolute;
      top: 31%;
      left: -70px;
      transform: translateY(-30%);
      max-width: 35rem;
    `}

    ${media.lessThan('medium')`
      position: absolute;
      max-width: 40rem;
      width: max-content;
      top: 60%;
      left: 65%;
      transform: translate(-60%,-65%);
    `}

    ${media.lessThan('small')`
      position: absolute;
      max-width: 32rem;
      width: max-content;
      top: 90%;
      left:50%;
      transform: translate(-50%,-90%);
    `}
  `}
`;
