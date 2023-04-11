import {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from 'styled-components';

import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html,  body {
    height: 100%;
    font-family: 16px;
  }

  ${({ theme }) => css`
    body {
      height: auto;
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.gray};
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`;

export default GlobalStyles;
