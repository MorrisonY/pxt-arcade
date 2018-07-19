# Avoid the cars!

![Final Car Game](/static/courses/csintro1/review/final-car-avoid.gif)

## Provided Starter Code:

```blocks
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let projectile: Sprite = null
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, true)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {

})
```

## Student Task 1:

Using the above code as a base, add to the ``||game:on game update every...||`` block to create projectiles of kind ``||sprites:car||`` that the player must avoid. They should move to the left across the center of the screen at a rate of 50. 

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let projectile: Sprite = null
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.setFlag(SpriteFlag.StayInScreen, false)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 8 8 7 7 7 8 8 7 7 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Car)
})
// :end-solution
```

## Student Task 2

Now, make the cars start at a random y position on the screen, so that they don't move in a straight line. To do this, you will need to use the ``||math:pick random between...||`` and ``||scene:screen height||`` blocks.

```blocks
// :solution
enum SpriteKind {
    Player,
    Enemy,
    Car
}
let projectile: Sprite = null
let agent: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Car, function (sprite, otherSprite) {
    game.over()
})
agent = sprites.create(img`
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 5 f f 5 5 . . . 
. 5 5 5 f f 5 5 5 f f 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 . . 
. . 5 5 5 5 f f f 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
agent.y += 40
controller.controlSprite(agent, 100, 100)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 8 8 7 7 7 8 8 7 7 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0, SpriteKind.Car)
    projectile.y = Math.randomRange(0, scene.screenHeight())
})
// :end-solution
```