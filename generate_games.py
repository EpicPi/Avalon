import random
import json

players = ['merlin', 'LSA', 'morgana', 'minion of mordred/oberon', 'percival', 'minion of mordred', 'LSA']
tokens = [str(i) for i in range(70)]
join_tokens = ['canada','delta','united','frontier','sw','alaska','american','spirit','jetblue']

games = []
with open('games.json', 'w+') as f:
    for join_token in join_tokens:
        n_players = [] + players
        random.shuffle(n_players)
        n_tokens = [] + tokens
        random.shuffle(n_tokens)
        games.append({"joinToken":join_token, "players":n_players,"tokens":n_tokens})
    f.write(json.dumps(games))