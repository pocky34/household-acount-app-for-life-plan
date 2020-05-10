<template>
  <div class="button" @click="onClick">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
}
</script>

<style scoped>
.button {
  display: inline-block;
  background: red;
  color: white;
  padding: 7px;
  cursor: pointer;

  /* 角丸の指定 */
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.button:hover {
  background: rgb(182, 0, 0);
}
.button:active {
  background: rgb(138, 13, 13);
}
</style>