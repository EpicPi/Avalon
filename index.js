let games = [];

fetch("./games.json")
    .then((response) => response.json())
    .then((json) => (games = json));

let showRole = false;
let game = null;
let roleIndex = null;

const hideDiv = (divId) => {
    const div = document.getElementById(divId);
    div.classList.add("hide");
};
const showDiv = (divId) => {
    const div = document.getElementById(divId);
    div.classList.remove("hide");
};

const Landing = "Landing";
const GMLanding = "GMLanding";
const PYLanding = "PYLanding";
const GameActive = "GameActive";
const GMQuest = "GMQuest";
const GMQuestComplete = "GMQuestComplete";
const PYQuest = "PYQuest";
const PYQuestComplete = "PYQuestComplete";
const role = "role";

const populateGameActive = () => {
    showDiv(GameActive);
    document.getElementById("role").innerHTML = game.players[roleIndex];
    document.getElementById("gameCode").innerHTML = game.joinToken;
};

const setGameMaster = () => {
    hideDiv(Landing);
    showDiv(GMQuest);
    showDiv(PYQuest);
    game = randomChoice(games);
    roleIndex = 0;
    populateGameActive();
};

const setPlayer = () => {
    hideDiv(Landing);
    showDiv(PYLanding);
};

const randomChoice = (arr) => {
    return arr[Math.floor(arr.length * Math.random())];
};

const evalQuest = () => {
    const questNum = Number(document.getElementById("GMQuestNum").value) - 1;
    let tokens = [];
    tokens.push(document.getElementById("p1Token").value.toLowerCase());
    tokens.push(document.getElementById("p2Token").value.toLowerCase());
    tokens.push(document.getElementById("p3Token").value.toLowerCase());
    tokens.push(document.getElementById("p4Token").value.toLowerCase());
    let numPass = 0;
    let numFail = 0;
    tokens = tokens.filter((token) => token.trim().length > 0);
    const inPlayTokens = game.tokens.slice(questNum * 14, (questNum + 1) * 14);
    for (token of tokens) {
        const index = inPlayTokens.indexOf(token);
        if (index == -1) {
            alert(token + " is invalid");
            throw token + " is invalid";
        } else {
            if (index % 2 == 0) {
                numPass += 1;
            } else {
                numFail += 1;
            }
        }
    }
    document.getElementById("numPass").innerText = numPass;
    document.getElementById("numFail").innerText = numFail;

    hideDiv(GMQuest);
    showDiv(GMQuestComplete);
};

const GMnextQuest = () => {
    hideDiv(GMQuestComplete);
    showDiv(GMQuest);
};

const joinGame = () => {
    hideDiv(PYLanding);
    roleIndex = Number(document.getElementById("roleIndex").value);
    const joinToken = document.getElementById("joinCode").value;
    game = games.filter((game) => game.joinToken == joinToken)[0];
    populateGameActive();
    showDiv(PYQuest);
};

const submitPass = () => {
    submitVote(0);
};
const submitFail = () => {
    submitVote(1);
};

const submitVote = (tokenIndex) => {
    hideDiv(PYQuest);
    showDiv(PYQuestComplete);
    const questNum = Number(document.getElementById("PYQuestNum").value) - 1;
    const votingToken = game.tokens[questNum * 14 + roleIndex * 2 + tokenIndex];
    document.getElementById("votingToken").innerText = votingToken;
};

const PYnextQuest = () => {
    hideDiv(PYQuestComplete);
    showDiv(PYQuest);
};

const toggleRole = () => {
    showRole = !showRole;
    if (showRole) {
        showDiv(role);
    } else {
        hideDiv(role);
    }
};

const makeRandom = () => {
    document.getElementById("RandomSpan").innerText = Math.floor(Math.random() * 7);
};
