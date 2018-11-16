$(document).ready(function () {
  // build initial table with seed data
  buildCharacterTable(seedData);

  // filter by name when key is pressed
  $('#user-input').keyup(function() {
    var result = [];
    for(var i = 0; i < seedData.length; i++) {
      // convert values to lowercase for "case insensitivity"
      if(red.isStringMatching(seedData[i].name.toLowerCase(), $('#user-input').val().toLowerCase())) {
        result.push(seedData[i]);
      }
    }
    updateCharacterTable(result);
  });

  // sort by column when column header is clicked
  $('.sort').click(function () {
    var key = $(this).attr('data-column');
    var order = $(this).attr('data-order');
    var newOrder = order === "true" ? "false" : "true";
    $(this).attr('data-order', newOrder);
    sortByColumn(key, order);
  });
});

// Helper functions for later use
function buildCharacterTable(data) {
  red.generateRowArray(data).forEach(function(row) {
    $('.people tbody').append(row);
  });
}

function updateCharacterTable(updatedData) {
  clearTable();
  buildCharacterTable(updatedData);
}

function sortByColumn(key, order) {
  clearTable();
  order = order === "true" ? true : false;
  updateCharacterTable(red.insertionSort(seedData, key, order));
}

function clearTable() {
  $('.people tbody').html('');
}