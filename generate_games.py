import random
import json

players = ['merlin', 'LSA', 'morgana', 'minion of mordred/oberon', 'percival', 'minion of mordred', 'LSA']
tokens = ['a' + str(i) for i in range(70)]
join_tokens = ['canada','delta','united','frontier','sw','alaska','american','spirit','jetblue']

games = []
with open('games.json', 'w+') as f:
    for join_token in join_tokens:
        random.shuffle(players)
        random.shuffle(tokens)
        games.append({"joinToken":join_token, "players":players,"tokens":tokens})
    f.write(json.dumps(games))