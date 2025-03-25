const BASE_URL = "http://localhost:3000/characters";

const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");
const votesForm = document.getElementById("votes-form");

function fetchCharacters() {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        const span = document.createElement("span");
        span.textContent = character.name;
        span.addEventListener("click", () => displayCharacterDetails(character));
        characterBar.appendChild(span);
      });
    });
}

function displayCharacterDetails(character) {
  detailedInfo.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    <p>Votes: <span id="vote-count">${character.votes}</span></p>
    <form id="votes-form">
      <input type="number" id="votes" placeholder="Enter votes" required>
      <button type="submit">Add Votes</button>
    </form>
    <button id="reset-votes">Reset Votes</button>
  `;

  const resetButton = document.getElementById("reset-votes");
  resetButton.addEventListener("click", () => resetVotes(character));

  const votesForm = document.getElementById("votes-form");
  votesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const voteInput = document.getElementById("votes").value;
    const voteCount = document.getElementById("vote-count");

    const newVotes = parseInt(voteCount.textContent) + parseInt(voteInput);
    voteCount.textContent = newVotes;

    
  });
}

