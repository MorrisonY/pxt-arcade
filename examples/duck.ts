const duckImg = img`
..eeee
..e.ee..ee
..eeee..ee
RRRRRR..ee
..eeeeeeee
..eeeeeeee
..eeeeeeee
....eeee
....eeee
....eeee
..RRRRRR
`

const cloudImg = img`
 . f f f . . . . . . . . . f f
 f 2 2 2 f . . f f f . . f 2 2 f
 f 2 2 2 2 f f 2 2 2 f f 2 2 2 f
 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f
 . f f f f f f f f f f f f f f
 `
cloudImg.double()

let block = image.repeatY(20, image.ofBuffer(hex`f40e
00 0f f7 77 7f f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
`))

let bot = image.ofBuffer(hex`f40e
0f ff ff ff ff ff f0
0f 77 77 77 77 77 f0
0f 77 77 77 77 77 f0
00 ff 77 77 77 ff 00
00 0f 77 77 77 f0 00
`)

let top = bot.clone()
top.flipY()

let hole = image.create(top.width(), 50)

let pimg = image.concatY([block, top, hole, bot, block])

let spread = 80
let prevObstacle: Sprite

let duck = sprite.create(duckImg)
duck.image.flipX()
duck.y = 90
duck.x = 20

duck.onCollision(game.over)
duck.onHitWall(game.over)

function launchObstacle() {
    prevObstacle = sprite.launchObstacle(pimg, -30, 0)
    prevObstacle.y = Math.randomRange(30, 90)
    prevObstacle.onDestroy(function () {
        game.addToScore(1)
    })
}

keys.A.onPressed(function () {
    if (prevObstacle == null)
        launchObstacle()
    duck.ay = 300
    duck.vy = -100
})

control.addFrameHandler(0, function () {
    screen.fill(4)

    if (Math.random() < 0.02) {
        let s = sprite.launchObstacle(cloudImg, -45, 0)
        s.y = Math.randomRange(0, screen.height())
        s.z = -1
        s.makeGhost()
    }

    if (prevObstacle && prevObstacle.x < screen.width() - spread) {
        launchObstacle()
        spread = Math.randomRange(40, 90)
    }
})
