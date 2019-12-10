<template>
  <div>
    <a
      href="javascript:"
      class="profile-link"
      @click="$router.push('/info')"
    >
    我的
    </a>
    <router-view />
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
