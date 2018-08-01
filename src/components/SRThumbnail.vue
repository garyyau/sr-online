<template>
  <div class="SRThumbnail">
    Hello.
  </div>
</template>

<script>
export default {
  name: 'SRThumbnail',
  props: {
    ratio: Number,
    src: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.SRThumbnail {

}
</style>
