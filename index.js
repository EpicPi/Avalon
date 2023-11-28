const game1 = {
    joinToken: "delta",
    players: ["LSA", "minion of mordred", "merlin", "minion of mordred/oberon", "morgana", "percival", "LSA"],
    tokens: ["a41", "a62", "a36", "a56", "a21", "a27", "a5", "a12", "a69", "a40", "a4", "a66", "a26", "a48", "a15", "a45", "a14", "a61", "a42", "a9", "a25", "a28", "a44", "a3", "a50", "a32", "a10", "a54", "a19", "a33", "a46", "a13", "a63", "a31", "a2", "a55", "a24", "a53", "a8", "a18", "a64", "a38", "a60", "a29", "a52", "a11", "a35", "a67", "a37", "a51", "a43", "a49", "a17", "a30", "a68", "a65", "a34", "a47", "a22", "a1", "a59", "a20", "a0", "a6", "a57", "a39", "a7", "a23", "a16", "a58"],
};
const game2 = {
    joinToken: "untied",
    players: ["merlin", "LSA", "morgana", "percival", "minion of mordred", "LSA", "minion of mordred/oberon"],
    tokens: ["a34", "a50", "a66", "a19", "a15", "a38", "a0", "a53", "a7", "a35", "a68", "a29", "a60", "a49", "a5", "a21", "a57", "a9", "a4", "a39", "a45", "a3", "a22", "a25", "a31", "a17", "a55", "a63", "a42", "a46", "a64", "a24", "a37", "a56", "a59", "a44", "a11", "a23", "a62", "a26", "a47", "a8", "a51", "a18", "a33", "a30", "a52", "a10", "a13", "a20", "a41", "a32", "a43", "a65", "a48", "a1", "a69", "a27", "a14", "a67", "a16", "a2", "a28", "a61", "a54", "a36", "a12", "a40", "a58", "a6"],
};
const game3 = {
    joinToken: "frontier",
    players: ["minion of mordred", "minion of mordred/oberon", "LSA", "morgana", "LSA", "percival", "merlin"],
    tokens: ["a11", "a43", "a66", "a8", "a48", "a63", "a25", "a15", "a33", "a51", "a0", "a5", "a6", "a49", "a56", "a60", "a12", "a57", "a24", "a14", "a41", "a21", "a1", "a7", "a32", "a10", "a16", "a65", "a31", "a36", "a37", "a67", "a9", "a54", "a20", "a68", "a26", "a17", "a61", "a47", "a23", "a50", "a22", "a59", "a52", "a53", "a18", "a29", "a30", "a19", "a34", "a38", "a13", "a69", "a27", "a3", "a4", "a62", "a44", "a28", "a35", "a42", "a40", "a46", "a2", "a64", "a58", "a55", "a39", "a45"],
};
const game4 = {
    joinToken: "sw",
    players: ["LSA", "merlin", "minion of mordred/oberon", "minion of mordred", "morgana", "percival", "LSA"],
    tokens: ["a37", "a50", "a56", "a6", "a61", "a27", "a15", "a42", "a33", "a19", "a65", "a26", "a12", "a5", "a13", "a22", "a1", "a62", "a8", "a16", "a53", "a11", "a0", "a40", "a58", "a4", "a34", "a54", "a67", "a63", "a29", "a30", "a38", "a45", "a64", "a59", "a7", "a14", "a52", "a48", "a18", "a9", "a2", "a35", "a55", "a25", "a41", "a17", "a10", "a28", "a23", "a66", "a68", "a20", "a24", "a49", "a60", "a44", "a3", "a39", "a69", "a36", "a47", "a43", "a32", "a51", "a46", "a31", "a57", "a21"],
};
const game5 = {
    joinToken: "alaska",
    players: ["percival", "minion of mordred", "minion of mordred/oberon", "LSA", "merlin", "LSA", "morgana"],
    tokens: ["a24", "a13", "a53", "a60", "a65", "a7", "a29", "a41", "a35", "a50", "a42", "a15", "a62", "a8", "a58", "a67", "a3", "a0", "a64", "a37", "a36", "a63", "a27", "a6", "a11", "a47", "a1", "a4", "a30", "a57", "a9", "a34", "a56", "a38", "a12", "a2", "a52", "a66", "a20", "a68", "a44", "a10", "a32", "a22", "a43", "a25", "a14", "a17", "a46", "a54", "a49", "a51", "a61", "a18", "a48", "a16", "a5", "a40", "a23", "a33", "a59", "a19", "a21", "a45", "a55", "a69", "a39", "a31", "a26", "a28"],
};
const game6 = {
    joinToken: "american",
    players: ["percival", "merlin", "minion of mordred/oberon", "minion of mordred", "LSA", "morgana", "LSA"],
    tokens: ["a43", "a40", "a8", "a28", "a25", "a11", "a69", "a13", "a15", "a3", "a18", "a26", "a64", "a31", "a41", "a50", "a14", "a24", "a58", "a53", "a57", "a42", "a48", "a55", "a30", "a22", "a49", "a65", "a68", "a36", "a27", "a60", "a1", "a66", "a67", "a19", "a17", "a10", "a39", "a63", "a20", "a29", "a5", "a23", "a61", "a16", "a46", "a9", "a37", "a38", "a52", "a62", "a54", "a33", "a2", "a12", "a51", "a32", "a59", "a6", "a21", "a34", "a4", "a35", "a56", "a47", "a44", "a45", "a7", "a0"],
};
const game7 = {
    joinToken: "spirit",
    players: ["LSA", "percival", "morgana", "LSA", "merlin", "minion of mordred", "minion of mordred/oberon"],
    tokens: ["a35", "a20", "a63", "a27", "a1", "a39", "a55", "a68", "a12", "a37", "a21", "a29", "a30", "a44", "a40", "a7", "a43", "a23", "a13", "a10", "a6", "a65", "a69", "a28", "a31", "a9", "a60", "a26", "a45", "a17", "a36", "a61", "a49", "a47", "a25", "a48", "a0", "a33", "a58", "a4", "a51", "a50", "a38", "a54", "a62", "a32", "a57", "a24", "a8", "a18", "a66", "a14", "a52", "a53", "a11", "a16", "a64", "a2", "a41", "a42", "a22", "a67", "a19", "a34", "a46", "a15", "a3", "a59", "a5", "a56"],
};
const game8 = {
    joinToken: "jetblue",
    players: ["LSA", "merlin", "minion of mordred", "morgana", "minion of mordred/oberon", "percival", "LSA"],
    tokens: ["a18", "a69", "a61", "a34", "a67", "a57", "a8", "a50", "a2", "a10", "a51", "a39", "a49", "a47", "a33", "a56", "a14", "a6", "a52", "a15", "a22", "a32", "a21", "a43", "a40", "a25", "a53", "a48", "a41", "a68", "a60", "a58", "a44", "a0", "a31", "a65", "a37", "a63", "a16", "a20", "a64", "a66", "a54", "a26", "a17", "a1", "a55", "a11", "a29", "a13", "a46", "a19", "a9", "a45", "a62", "a3", "a5", "a12", "a23", "a38", "a28", "a36", "a24", "a30", "a7", "a35", "a4", "a27", "a42", "a59"],
};
const game9 = {
    joinToken: "canada",
    players: ["merlin", "LSA", "morgana", "minion of mordred/oberon", "percival", "minion of mordred", "LSA"],
    tokens: ["a67", "a33", "a43", "a20", "a16", "a40", "a6", "a55", "a65", "a25", "a38", "a28", "a7", "a42", "a45", "a14", "a27", "a48", "a31", "a46", "a15", "a39", "a52", "a61", "a50", "a49", "a32", "a68", "a22", "a23", "a37", "a41", "a69", "a18", "a24", "a29", "a5", "a47", "a13", "a26", "a66", "a54", "a21", "a10", "a63", "a34", "a2", "a8", "a56", "a36", "a30", "a17", "a51", "a11", "a3", "a19", "a0", "a1", "a60", "a35", "a62", "a44", "a12", "a57", "a59", "a64", "a53", "a9", "a4", "a58"],
};

const games = [game1, game2, game3, game4, game5, game6, game7, game8, game9];

let showRole = true;
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
            alert(token + "is invalid");
            throw token + "is invalid";
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
    console.log(roleIndex);
    const joinToken = document.getElementById("joinCode").value;
    console.log(joinToken);
    game = games.filter((game) => game.joinToken == joinToken)[0];

    populateGameActive();
    showDiv(PYQuest);
};

const submitVote = () => {
    hideDiv(PYQuest);
    showDiv(PYQuestComplete);
    const questNum = Number(document.getElementById("PYQuestNum").value) - 1;
    const tokenIndex = document.getElementById("PYselector").value == "pass" ? 0 : 1;
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
