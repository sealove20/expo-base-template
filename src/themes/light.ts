import { type DefaultTheme } from 'styled-components';

import colors from './colors';
import sizes from './sizes';

export const fonts = {
  regular: 'Sora_400Regular',
};

const light: DefaultTheme = {
  colors: {
    ...colors,
  },
  space: {
    ...sizes,
  },
  fonts: {
    ...fonts,
  },
};

export { light };
