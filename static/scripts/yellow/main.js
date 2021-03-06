$(document).ready(function() {
  // build initial table with seed data
  buildCharacterTable(seedData);

  // reverse list when reverse button is clicked
  $('#reverse').click(function() {
    updateCharacterTable(yellow.reverseArr(seedData));
  });

  // sort by column when column header is clicked
  $('.sort').click(function() {
    var key = $(this).attr('data-column');
    var order = $(this).attr('data-order');
    var newOrder = order === "true" ? "false" : "true";
    $(this).attr('data-order', newOrder);
    sortByColumn(key, order);
  });
});

// Helper functions for later use
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