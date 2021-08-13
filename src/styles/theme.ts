import { defaultTheme } from '@xstyled/system';
import deepmerge from 'deepmerge';

export const EyeSqlTheme = deepmerge(defaultTheme, {
  fonts: {
    sans: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif',
  },
});
