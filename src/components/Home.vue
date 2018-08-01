<template>
  <div class="Home">
    <SRBackground :recordsMap="recordsMap" />
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import SRBackground from './SRBackground.vue'
import json from '../assets/records.json'

export default {
  components: {
    SRBackground,
  },
  mounted: function() {
    this.setRecords(json)
  },
  computed: {
    recordsMap () {
      return this.$store.getters.getRecords
    },
  },
  methods: {
    ...mapActions([
      'setRecords'
    ])
  },
}
</script>

<style lang="scss" scoped>
.Home {

}
</style>
