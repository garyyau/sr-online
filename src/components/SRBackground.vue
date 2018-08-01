<template>
  <div class="SRBackground">
    <div v-for="(item, index) in records" :key="index" class="item-tile">
        <div>{{ item.name }}</div>
        <div class="item-image">
          <img
            v-if="item.image"
            :src="getImagePath(item)"
            :alt="item.name"
          />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SRBackground',
  props: {
    recordsMap: {
      type: Object,
      required: true,
    },
  },
  computed: {
    records: function () {
      const keys = Object.keys(this.recordsMap)
      if (keys.length === 0) return []
      return keys.map(key => this.recordsMap[key])
    }
  },
  methods: {
    getImagePath: function(item) {
      return require(`@/assets/thumb/${item.image}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.SRBackground {
  display: flex;
  flex-wrap: wrap;
  margin: 1px;

  .item-tile {
    opacity: 0.2;
    padding-bottom: 10%;
    position: relative;
    width: 10%;
    transition: opacity 0.5s;

    &:hover {
      opacity: 1;
    }
  }

  .item-tile > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    margin: 2px;
    background: grey;
  }

  .item-tile .item-image {
    img {
      width: 100%;
    }
  }
}
</style>
