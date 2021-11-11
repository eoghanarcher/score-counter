let score = 0
let score_a = 0
input.onButtonPressed(Button.A, function () {
    game.removeLife(1)
})
input.onButtonPressed(Button.AB, function () {
    score += 3
})
input.onButtonPressed(Button.B, function () {
    score += 2
})
basic.forever(function () {
    score_a = 1 + score_a
})
