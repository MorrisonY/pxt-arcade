# Activity: Coordinate Walker

https://youtu.be/fr036vKEFiI

[Alternative Video Location](https://aka.ms/40544a-03_coordinate_walker_intro_final)

In this activity, students will investigate the game screen.

## Concept: Identify the X, Y coordinates of the Game Screen  

https://youtu.be/R6NJjzXfejM

[Alternative Video Location](https://aka.ms/40544a-coordinate-walker)

Move walker sprite around the game screen, and use it to identify `X` and `Y` coordinates

In order to create games, we need to be able to place ``||sprites:Sprites||`` and other objects at various locations on the game screen. In this set of activities, we will relate the screen (`x`, `y`) coordinates to the 4 corners and middle of the game screen.

## Student task #1: Coordinate Walker

Use the coordinate walker example to move around the screen and track `X` and `Y` coordinates.

Open the [coordinate walker program](https://makecode.com/_huXKRL3r24iC) or open the simulator in the following code to complete the tasks.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("X=" + Math.trunc(player1.x) + " Y=" + Math.trunc(player1.y))
})
let player1: Sprite = null
game.splash("Sprite Walker", "\"A\" for coordinates")
player1 = sprites.create(img`
1 1 1 
1 2 1 
1 1 1 
`, SpriteKind.Player)
scene.setBackgroundColor(12)
game.onUpdate(function () {
    // Move sprite bigger number is faster e.g. - dx(20)
    player1.x += controller.dx(15)
    player1.y += controller.dy(15)
    if (player1.x < -10) {
        player1.x = -10
    }
    if (player1.x > 170) {
        player1.x = 170
    }
    if (player1.y < -10) {
        player1.y = -10
    }
    if (player1.y > 130) {
        player1.x = 130
    }
})
```

1. To check the location: run the program, and then press the `A` button on the game pad (or space bar key on keyboard). This will display the starting location's `X` and `Y` coordinates
    * Note the two coordinate values for `(X, Y)`
2. Move the sprite: click on the game pad (or use keyboard `WASD` keys) to move the sprite. Check the coordinates after moving
    
## What did we learn?

Use `X` and/or `Y` in your answers  

1. Describe how coordinates change when moving up and down. Which direction caused the coordinates to increase?
2. Describe how coordinates change when moving right and left. Which direction caused the coordinates to increase?

## Student Task #2: Map Game Screen

Two dimensional game screen coordinates are represented by values for `X` and `Y` axis locations.

![XY Coordinates](/static/courses/csintro1/sprites/coordinates.png)

1. Move to the sprite to the top edge of the screen
    * What is the `Y` coordinate at the top of the screen?

![sprite at top edge of screen](/static/courses/csintro1/sprites/coordinate-edge.png)

2. Move to each of the corners and **map the coordinates** as a pair of X and Y values like `(X, Y)`
    * Restart the game. What are the coordinates when you start?
    * **Record** the coordinates at the **Top Right** corner
    * **Record** the coordinates at the **Bottom Right** corner
    * **Record** the coordinates at the **Bottom Left** corner
    * **Record** the coordinates at the **Top Left** corner
    * **Record** the Game Screen Dimensions (height by width)

![map the coordinates at the corners](/static/courses/csintro1/sprites/coordinates-map.png)

Record the results from this task in a simple diagram like the one below.

![map the coordinates results](/static/courses/csintro1/sprites/record-coordinates.png)

### Challenge: Bring an off-screen sprite back into view

Challenge a peer to bring the sprite back into view after you move the sprite off screen.

1. **Partner 1:** Move the walker sprite off past the area of the visible game screen (not too far)
2. **Partner 2**: Return the sprite to the screen using only two directions of the game controls
    * use the game pad `A` button to get the *hidden* sprite coordinates
    * pick 1: `up` or `down` `Y` direction
    * pick 1: `left` or `right`  `X` direction
    * using only the controller pad keys chosen bring the sprite back onto the screen
