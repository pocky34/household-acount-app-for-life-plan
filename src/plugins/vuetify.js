import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.cyan.base,
        secondary: colors.cyan.darken3,
        accent: colors.deepOrange.base,
        background: colors.grey.lighten3
      },
      dark: {
        primary: colors.cyan.darken4,
        secondary: colors.cyan.darken2,
        accent: colors.deepOrange.darken2,
      },
    },
  },
});
