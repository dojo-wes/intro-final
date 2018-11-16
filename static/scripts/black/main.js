$(document).ready(function () {
  // build initial table with seed data
  buildCharacterTable(seedData);

  // filter values by name
  $('#filter').keyup(function() {
    var entry = $('#filter').val().toLowerCase();
    updateCharacterTable(black.filter(seedData, function(person) {
      // convert to lowercase for "case insensitivity"
      return black.isStringMatching(person.name.toLowerCase(), entry);
    }));
  });

  // exclude values by name
  $('#exclude').keyup(function() {
    var entry = $('#exclude').val().toLowerCase();
    if(entry === "") {
      updateCharacterTable(seedData);
    } else {
      updateCharacterTable(black.exclude(seedData, function(person) {
        return black.isStringMatching(person.name.toLowerCase(), entry);
      }));
    }
  });
});

// Helper functions for later use
function buildCharacterTable(data) {
  black.map(data, function(person) {
    $('.people tbody').append(black.generateRow(person));
  });
}

function updateCharacterTable(updatedData) {
  clearTable();
  buildCharacterTable(updatedData);
}

function clearTable() {
  $('.people tbody').html('');
}