# Activity: Random Sprite Location

In this activity student will work with: 
*  ``||math:pick random||`` to generate random numbers
* setting sprite x and y positions

## Concept: pick a random number

## Example #1: pick random
### ~hint

Pick random will generate (pick) a number from the lowest to the highest numbers entered in the block. For the example students should see numbers 0 to 10. This includes 0 and 10.

Have students refresh at least 10 times and track the largest and smallest number generated. Ask students who had a number bigger than 5.  All hands should go up.
Then ask for 6, 7, 8, 9, 10

Ask for students who got 11 and no hands should go up.

Repeat for smaller than 5 , down to zero.
### ~

## Task #1: create random numbers ranges 
```blocks
// https://makecode.com/_guHCVgaxAiXy

let positiveOrNegative = 0
let anotherRandom = 0
let randomNumber = 0
randomNumber = Math.randomRange(1, 100)
console.logValue("1 to 100", randomNumber)
anotherRandom = Math.randomRange(20, 30)
console.logValue("20 to 30", anotherRandom)
positiveOrNegative = Math.randomRange(-10, 10)
console.logValue("-10 to 10", positiveOrNegative)
```


## Concept: pick a random location

## Example #2: random sprite location 

## Task #2: Set random position using a button event

```blocks
// https://makecode.com/_KUu08Kc9UXj2

enum SpriteKind {
    Player,
    Enemy
}
let hat: Sprite = null
let actor: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.vx = Math.randomRange(-10, 10)
    actor.vy = Math.randomRange(-10, 10)
})
actor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 . . 5 . . 5 . . . . . . 
. . . . 5 . 5 . 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . 5 7 2 7 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . 1 . 1 . . . . . . . . 
. . . . 7 . . . 7 . . . . . . . 
. . . 7 . . . . . 7 . . . . . . 
. . 2 2 . . . . . 2 2 . . . . . 
`, SpriteKind.Player)
hat = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 4 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
```

## Example #3: check for random overlap 

## Task #3: check for random overlap with many sprites

```blocks
// https://makecode.com/_EoRXfFEm5eFL

enum SpriteKind {
    Player,
    Enemy,
    Hat
}
let hat3: Sprite = null
let actor: Sprite = null
let hat2: Sprite = null
let hat1: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat1.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat2.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
    hat3.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hat, function (sprite, otherSprite) {
    sprite.say("Excuse Me!", 500)
    sprite.vx = Math.randomRange(-15, 15)
    sprite.vy = Math.randomRange(-15, 15)
    sprite.x += 8
    pause(500)
    otherSprite.x = Math.randomRange(-20, 20)
    otherSprite.vy = Math.randomRange(-20, 40)
})
hat1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d 8 d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d d . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
hat2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . . . . . 4 7 7 7 7 7 7 7 7 4 . . . . . . . . . . . . . . . 
. . . 1 1 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . 
. . . . 1 1 1 1 1 6 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . 6 6 6 6 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . 6 4 6 6 6 1 6 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 6 6 6 1 1 1 1 1 . 1 1 . . . . . . . . . . 
. . . . 6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 . 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 1 1 . 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . 1 1 1 1 1 . . . . . . . . . . 
. . . . . . . 6 6 6 6 6 6 6 6 6 . 1 1 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . 1 1 1 1 . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . 1 . . . . . . . . . . 
. . . . . . 6 6 . . 6 6 6 6 6 . . . . . . 1 . . . . . . . . . . 
. . . . . . . . . . 6 6 6 6 6 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
hat3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 5 2 2 2 5 2 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 5 2 2 2 5 2 2 5 . . . . . . . . . . . . . . . 
. . . . . . . 5 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 5 2 2 5 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 5 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 5 2 5 2 2 . . . . . . . . . . . . . . . 
. . . . . . . 2 5 2 2 2 2 2 2 2 5 . . . . . . . . . . . . . . . 
. . . . . . 2 7 7 7 7 7 7 7 7 7 . 2 . . . . . . . . . . . . . . 
. . . . 2 5 . 7 7 7 7 7 7 7 7 7 . . 2 . . . . . . . . . . . . . 
. . 2 2 . . . 7 f 7 7 7 7 7 7 7 . . . 5 . . . . . . . . . . . . 
2 5 . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . 2 . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 2 . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . 5 . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Hat)
actor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 . . 5 . . 5 . . . . . . 
. . . . 5 . 5 . 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . 5 7 2 7 5 . . . . . . . 
. . . . . 5 7 5 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . 2 1 1 1 1 1 1 1 2 . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . 1 . 1 . . . . . . . . 
. . . . 7 . . . 7 . . . . . . . 
. . . 7 . . . . . 7 . . . . . . 
. . 2 2 . . . . . 2 2 . . . . . 
`, SpriteKind.Player)
actor.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat1.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat2.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
hat3.setPosition(Math.randomRange(15, 145), Math.randomRange(15, 105))
```

## What did we learn? 

1. Describe how a set random makes programming can make a game more interesting and/or challenging.
2. What is a good use of random that you would like to design into a future game - especially something we don't know how to do yet. Be descriptive of the game and how random is needed.  

## Rubrics

### TODO Rubric

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| pick random  | completed at least 2 tasks |  completed all 3 tasks | completed all 3 tasks well and at least 1 challenge | Completed all tasks & challenges  |

### Score = \_\_\_\_\_\_ /10 

### What did we learn rubric 

|   | 5pts | 7pts | 9pts | 10pts |
|:---:|:---:|:---:|:---:|:---:|
| Explanation | answered a questions but parts are unclear or lack detail | Explanations address all 2 questions fully | all answers have clear and useful explanations | both answers have exceptional explanations using an original example and/or analogy |

### Score = \_\_\_\_\_\_ /10 