import { createGlobalStyle } from '@xstyled/emotion';

export const BaseStyle = createGlobalStyle`
  body {
    background-color: bg;
    color: fg;
    font-size: 1.3rem;
  }

  object, svg {
    display: inline-block;
    vertical-align: bottom;
  }

  input {
    background: inherit;
  }

  input, button {
    color: inherit;
  }

  button {
    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      filter: brightness(0.9);
    }
  }
`;
