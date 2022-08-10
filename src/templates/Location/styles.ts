import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .leaflet-container {
    z-index: 0;
  }
`;

export const ButtonWrapper = styled.header`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    max-width: ${theme.grid.container};
    width: 100%;
    padding: 0 ${theme.spacings.small};
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;
