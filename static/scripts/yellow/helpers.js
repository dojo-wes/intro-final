var helpers = (function() {
  function buildCharacterTable(data) {
    for (var i = 0; i < data.length; i++) {
      $('.people tbody').append(yellow.generateRow(data[i]));
    }
  }

  function updateCharacterTable(updatedData) {
    clearTable();
    buildCharacterTable(updatedData);
  }

  function sortByColumn(key, order) {
    clearTable();
    order = order === "true" ? true : false;
    updateCharacterTable(yellow.bubbleSort(seedData, key, order));
  }

  function clearTable() {
    $('.people tbody').html('');
  }

  return {
    buildCharacterTable: buildCharacterTable,
    updateCharacterTable: updateCharacterTable,
    sortByColumn: sortByColumn,
  }
})();