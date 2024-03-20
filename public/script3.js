var trivia = document.getElementById('trivialeaderboard');
var poke = document.getElementById('pokeleaderboard');

let data = [];

async function displayPokeScore(){
    try {
        const response = await fetch(`http://localhost:3000/api/displayPokeScore`);
        data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error);
    }
    createTable();
}

async function displayTriviaScore(){
    try {
        const response = await fetch(`http://localhost:3000/api/displayTriviaScore`);
        data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error);
    }
    createTable();
}

function createTable() {
    const tableContainer = document.getElementById('leaderboard');
    tableContainer.innerHTML = '';
    // Create table
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    const playerNameHeader = document.createElement('th');
    playerNameHeader.textContent = 'Player Name';
    const scoreHeader = document.createElement('th');
    scoreHeader.textContent = 'Score';
    headerRow.appendChild(playerNameHeader);
    headerRow.appendChild(scoreHeader);
    thead.appendChild(headerRow);

// Create table body
    for(var i = 0; i < data.length; i++){
        var row = document.createElement('tr');
        var playerNameCell = document.createElement('td');
        playerNameCell.textContent = data[i].playerName;
        var scoreCell = document.createElement('td');
        scoreCell.textContent = data[i].score;
        row.appendChild(playerNameCell);
        row.appendChild(scoreCell);
        tbody.appendChild(row);
    }

// Append thead and tbody to the table
    table.appendChild(thead);
    table.appendChild(tbody);

// Append the table to the document body
    tableContainer.appendChild(table);
}
