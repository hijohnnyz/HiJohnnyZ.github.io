// From data.js
var tableData = data;

// Use console.log to troubleshoot
console.log(tableData);

// Get variables from HTML document
var tbody = d3.select("tbody");
var dateField = d3.select("#datetime");
var searchField = d3.select("#search");

// Table creation by adding data to the tbody of HTML
function renderTable(ufoData) {
  tbody.html("");
  ufoData.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

//Define what the buttons will do
// Event listeners for buttons 'Search' and 'Reset'
searchField.on("click", function() {
  // Prevent refresh
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = dateField;

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Filter the table by specified data
  var filteredData = tableData;
  console.log(filteredData)

  // If statement to account for blank form entry
  if (inputValue) {
    filteredData = tableData.filter(x => x.datetime === inputValue);
  }

  renderTable(filteredData);

});

// Render table for first time
renderTable(tableData);