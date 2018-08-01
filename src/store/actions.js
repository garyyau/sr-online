export default {

  setRecords ({ commit }, json) {
    const recordsMap = {}

    for (let recordType in json) {
      json[recordType].forEach(record => {
        const key = record.name.replace(/\W+/g, '')
        recordsMap[key] = { ...record, key, recordType }
      })
    }

    console.log(recordsMap)
    commit('setRecords', recordsMap)
  }

}
