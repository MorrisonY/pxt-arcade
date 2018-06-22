// https://makecode.com/_4FV3YC6VLAmH

let player1: Sprite = null
game.splash("Sprite Walker", "\"A\" for coordinates")
player1 = sprites.create(img`
1 1 1 
1 2 1 
1 1 1 
`, 0)
scene.setBackgroundColor(12)
game.onUpdate(function () {
    if (controller.A.isPressed()) {
        // display integer part of coordinates as a string
        game.splash("" + Math.trunc(player1.x) + "", "X")
        pause(1000)
        game.splash("" + Math.trunc(player1.y) + "", "Y")
        pause(1000)
    }
    if (controller.B.isPressed()) {
        player1.setPosition(80, 64)
    }
    // Move sprite bigger number is faster for
    // controller.dx(15)
    player1.x += controller.dx(15)
    player1.y += controller.dy(15)
})
