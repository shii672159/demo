<template>
  <div>
    <img class="demo" src="@/assets/default.jpg" />
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}

.demo {
  width: vw(1920);
  height: vh(1080);
}
</style>
