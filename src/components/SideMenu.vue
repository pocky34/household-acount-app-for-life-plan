<template>
<aside class="menu">
  <ul class="menu-list">
    <li class="menu-list-title active">レポート</li>
    <li class="menu-list-title">支出入力(工事中)</li>
    <li class="menu-list-title">設定(工事中)</li>
  </ul>
</aside>
</template>

  

<script>
export default {

}
</script>

<style scoped>

.menu {
  position: fixed;
  width: 199px;
  height: 100vh;
  background: #eee;
  border-right: 1px solid black;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.menu-list-title {
  border-bottom: 1px solid black;
  height: 40px;
  line-height: 40px;
  font-size: 0.8em;
}

.menu-list-title:hover, .active {
  font-size: 1em;
  background-color: #555;
  color: white;
  font-weight: bold;

}
</style>