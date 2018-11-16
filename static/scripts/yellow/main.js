$(document).ready(function() {
  // build initial table with seed data
  helpers.buildCharacterTable(seedData);

  // reverse list when reverse button is clicked
  $('#reverse').click(function() {
    helpers.updateCharacterTable(yellow.reverseArr(seedData));
  });

  // sort by column when column header is clicked
  $('.sort').click(function() {
    var key = $(this).attr('data-column');
    var order = $(this).attr('data-order');
    var newOrder = order === "true" ? "false" : "true";
    $(this).attr('data-order', newOrder);
    helpers.sortByColumn(key, order);
  });
});