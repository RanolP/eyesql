import { defaultTheme, th } from '@xstyled/emotion';
import deepmerge from 'deepmerge';

export const EyeSqlTheme = deepmerge(defaultTheme, {
  fonts: {
    sans: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
  },
  colors: {
    whiteBrighten: th.color('blue-gray-100'),
    white: th.color('blue-gray-200'),
    whiteDarken: th.color('blue-gray-300'),
    blackBrighten: th.color('blue-gray-700'),
    black: th.color('blue-gray-800'),
    blackDarken: th.color('blue-gray-900'),

    fg: th.color('black'),
    bgBrighten: th.color('whiteBrighten'),
    bg: th.color('white'),
    bgDarken: th.color('whiteDarken'),
    primary: th.color('blue-gray-400'),
    primaryFg: th.color('white'),
    modes: {
      dark: {
        fg: th.color('white'),
        bgBrighten: th.color('blackBrighten'),
        bg: th.color('black'),
        bgDarken: th.color('blackDarken'),
        secondary: th.color('orange-400'),
      },
    },
  },
});
