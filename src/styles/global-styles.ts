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
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
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
