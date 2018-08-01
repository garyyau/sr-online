export default {

  getRecord: (state, key) => {
    return state.recordsMap[key]
  },

  getRecords: state => {
    return state.recordsMap
  }

}
