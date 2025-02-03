// Sample Data (You'll likely want to start with empty arrays in a real app)
let names = ["Ben", "Joel", "Judy", "Anne", "Mike"];
let scores = [88, 98, 77, 88, 99];

// Helper function (like your $ function)
function $(id) {
  return document.getElementById(id);
}

window.onload = function() {
  $("add_button").onclick = addScore;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("name").focus(); // Set focus to the name field on load
};

function displayResults() {
  let total = 0;
  for (let s of scores) {
    total += s;
  }
  let average = total / scores.length;

  let highScore = 0;
  let highScoreName = "";
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      highScoreName = names[i];
    }
  }

  $("results").innerHTML = `<h2>Results</h2><p>Average score = ${average.toFixed(0)}</p><p>High score = ${highScoreName} with a score of ${highScore}</p>`;
}

function displayScores() {
  let tableBody = $("scores_table").querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  for (let i = 0; i < names.length; i++) {
    let row = tableBody.insertRow();
    let nameCell = row.insertCell();
    let scoreCell = row.insertCell();
    nameCell.textContent = names[i];
    scoreCell.textContent = scores[i];
  }
}

function addScore() {
  let name = $("name").value.trim();
  let score = $("score").value.trim();

  if (name === "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score");
    return; // Stop the function if validation fails
  }

  names.push(name);
  scores.push(parseInt(score)); // Convert score to a number

  $("name").value = ""; // Clear the input fields
  $("score").value = "";
  $("name").focus();   // Move focus back to the name field
}