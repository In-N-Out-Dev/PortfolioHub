import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    overflow-wrap: break-word;
    word-break: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  html {
    /* 62.5% equals to 10px: 1rem = 10px */
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  dl,
  li,
  menu,
  ol,
  ul {
    list-style: none;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }
  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }
  a,
  a:active,
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  .sr-only {
    position: absolute;
    margin: -0.1rem;
    width: 0.1rem;
    height: 0.1rem;
    padding: 0;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
