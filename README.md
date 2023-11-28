# UI

## landing page

- button: game master (GM) -> redirect to GM landing page
- button: player (PY) -> redirect to PY landing page

## GM landing page

- input: roles - checkboxes
- input: num Moms
- input: num LSAs
- button: submit -> GM quest page

## GM quest page

- page: Game active page
- input: quest #
- input: (x num players) voting tokens
- button: Eval -> GM quest complete page

## GM quest complete page

- page: Game active page
- display: num pass/fail
- button: start next quest -> GM quest page

## PY landing page

- input: index w/i circle (GM is 0)
- input: join code (distribute by GM)
- button: submit -> PY activity page

## PY quest page

- page: Game active page
- input: radio pass/ fail
- input: quest #
- button: submit -> Py quest complete page

## PY quest complete page

- page: Game active page
- display: voting token
- button: next quest -> Py quest page

## Game active page

- display: join code
- display: (hideable) role

# Logic

Games[]

Game

- joinToken (ends with O if oberon is in game)
- players: []

Player

- role
- circleIndex
- r1Tokens: [passToken, failToken]
- r2Tokens: [passToken, failToken]
- r3Tokens
- r4Tokens
- r5Tokens

All tokens need to be unique in a game

7 players - 3 mom, 2 3 3 4(2f) 4
percival, merlin, lsa, lsa, morgana, mom, oberon/mom
