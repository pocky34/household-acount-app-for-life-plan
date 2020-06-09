<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app color="cyan" dark clipped-left class="darken-1">
      <v-app-bar-nav-icon @click="drawer=!drawer" />
      <v-toolbar-title v-if="$vuetify.breakpoint.smAndUp">家計簿アプリ for ライフプランニング</v-toolbar-title>
      <v-toolbar-title v-if="$vuetify.breakpoint.xsOnly" class="pl-0">家計簿アプリ</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Main />
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    drawer: null,
    nav_lists: [
      { name: 'ダッシュボード', icon: 'mdi-view-dashboard' },
      { name: '支出入力', icon: 'mdi-pen' },
      { name: '設定', icon: 'mdi-cogs' },
    ]
  }),
};
</script>
