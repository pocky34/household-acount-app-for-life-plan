<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" :to="nav_list.link">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-switch v-model="$vuetify.theme.dark" hide-details inset label="Dark"></v-switch>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app dark clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-toolbar-title v-if="$vuetify.breakpoint.smAndUp">家計簿アプリ for ライフプランニング</v-toolbar-title>
      <v-toolbar-title v-if="$vuetify.breakpoint.xsOnly" class="pl-0">家計簿アプリ</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    nav_lists: [
      { name: 'ダッシュボード', icon: 'mdi-view-dashboard', link: '/' },
      { name: '支出入力', icon: 'mdi-pen', link: '/input' },
      { name: '設定', icon: 'mdi-cogs' },
      { name: 'このアプリについて', icon: 'mdi-information', link: '/about' },
    ]
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    }
  }
};
</script>
