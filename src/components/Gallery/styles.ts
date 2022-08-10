import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const GalleryContainer = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 0.3fr 0.7fr;
    grid-template-rows: 40rem 36rem 36rem;
    grid-template-areas:
      'whitebox imageGridOne imageGridOne'
      'imageGridTwo imageGridTwo imageGridThree'
      'imageGridTwo imageGridTwo blackbox';

    margin: calc(${theme.spacings.huge} * 2) 0;
    gap: ${theme.spacings.medium};

    ${media.lessThan('small')`
      grid-template-columns: 1fr;
      gap: ${theme.spacings.xsmall};

      grid-template-areas:
        'imageGridOne'
        'whitebox '
        'imageGridTwo'
        'imageGridThree'
        'blackbox'
        ;
    `}
  `}
`;

export const WhiteBox = styled.div`
  ${({ theme }) =>
    css`
      grid-area: whitebox;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.xsmall};

      background: ${theme.colors.white};
      padding: ${theme.spacings.small};
    `}
`;

export const ImageGridOne = styled.div`
  grid-area: imageGridOne;

  background-position: center center;
  background-image: url('/images/image-grid-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export const ImageGridTwo = styled.div`
  grid-area: imageGridTwo;
  background-position: center center;
  background-image: url('/images/image-grid-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;
export const ImageGridThree = styled.div`
  grid-area: imageGridThree;
  background-position: center center;
  background-image: url('/images/image-grid-3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export const BlackBox = styled.div`
  ${({ theme }) =>
    css`
      grid-area: blackbox;
      background: ${theme.colors.black};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.xsmall};

      padding: ${theme.spacings.large} ${theme.spacings.small};
    `}
`;
