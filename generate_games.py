import random
import json

player_lists = {
    5: ["merlin", "percival", "LSA", "morgana", "minion of mordred/oberon"],
    6: ["merlin", "percival", "LSA", "LSA", "morgana", "minion of mordred/oberon"],
    7: [
        "merlin",
        "percival",
        "LSA",
        "LSA",
        "morgana",
        "minion of mordred/oberon",
        "minion of mordred/mordred",
    ],
    8: [
        "merlin",
        "percival",
        "LSA",
        "LSA",
        "LSA",
        "morgana",
        "minion of mordred/oberon",
        "minion of mordred/mordred",
    ],
    9: [
        "merlin",
        "percival",
        "LSA",
        "LSA",
        "LSA",
        "LSA",
        "morgana",
        "minion of mordred/oberon",
        "minion of mordred/mordred",
    ],
    10: [
        "merlin",
        "percival",
        "LSA",
        "LSA",
        "LSA",
        "LSA",
        "morgana",
        "minion of mordred/oberon",
        "minion of mordred/mordred",
        "minion of mordred",
    ],
}

tokens = [str(i) for i in range(100)]
join_tokens = [
    "canada",
    "delta",
    "united",
    "frontier",
    "sw",
    "alaska",
    "american",
    "spirit",
    "jetblue",
]

games = []
with open("games.json", "w+") as f:
    for join_token in join_tokens:
        for num_players, players in player_lists.items():
            random.shuffle(players)
            random.shuffle(tokens)
            games.append(
                {
                    "joinToken": join_token + "_" + str(num_players),
                    "players": players.copy(),
                    "tokens": tokens.copy(),
                    "numPlayers": num_players,
                }
            )
    f.write(json.dumps(games))
