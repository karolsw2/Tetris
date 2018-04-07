import { Block } from './Block.js'
import { View } from './View.js'

/**
 * Main class responsible for everything what is going on in the game
 * @constructor Game
 */
export class Game {
  constructor () {
    console.log('jprdl')
    this.actualBlock = {}
    this.sizeX = 0
    this.view = {}
    this.sizeY = 0
    this.landed = []
    this.paused = false
    this.score = 0
  }

  /**
   * Initalize the game and start it
   */
  init (sizeX, sizeY) {
    console.log('Initialising the game...')
    this.view = new View(sizeX, sizeY)    
    this.sizeX = sizeX
    this.sizeY = sizeY
    // Fill the landed array with empty tiles
    this.landed = Array(...Array(sizeX)).map(() => Array(sizeY).fill(0))
    this.createBlock(Math.round(sizeX / 2), Math.round(sizeY / 2))
    this.startGameInterval(200)
  }

  startGameInterval (frameTime) {
    setInterval(() => {
      this.moveActualBlockDown()
      this.view.renderFrame(this.landed, this.actualBlock)
    }, frameTime)
  }

  createBlock (x, y) {
    this.actualBlock = new Block(x, y)
  }

  /**
   * Moves actual block one row down (Acts like a gravity)
   */
  moveActualBlockDown () {
    // If any collision occurs - add the block to the landed blocks array
    if (this.checkBlockCollision() || this.actualBlock.y === 0) {
      this.landBlock()
      this.createBlock(Math.floor(this.sizeX / 2) - 3, this.sizeY - 3)
    } else {
      this.actualBlock.y -= 1
    }
  }

  /**
   * Adds actual block to the landed array
   */
  landBlock () {
    for (let x = 0; x < this.actualBlock.shape.length; x++) {
      for (let y = 0; y < this.actualBlock.shape[0].length; y++) {
        if (this.actualBlock.shape[x][y] === 1) {
          this.landed[this.actualBlock.x + x][this.actualBlock.y + y] = this.actualBlock.type
        }
      }
    }
  }

  /**
   * Check actual block collision with landed blocks on the landed array
   */
  checkBlockCollision () {
    let collision = false
    for (let x = 0; x < this.actualBlock.shape.length; x++) {
      for (let y = 0; y < this.actualBlock.shape[0].length; y++) {
        if (this.actualBlock.shape[x][y] === 1) {
          if (this.landed[this.actualBlock.x + x][this.actualBlock.y + y - 1] !== 0) collision = true
        }
      }
    }
    return collision
  }

  /**
   * Restart the game
   */
  restart () {
    this.landed = Array(...Array(this.sizeX)).map(() => Array(this.sizeY))
    this.createBlock(Math.round(this.sizeX / 2), Math.round(this.sizeY / 2))
  }

  /**
   * Fire when any key is pressed
   * @param {object} event - Document keydown event
   */
  keyDown (event) {
    let keyCode = event.keyCode
    if (keyCode === 83 || keyCode === 40) { // s OR down arrow
      this.moveActualBlockDown()
    }
  }

  /**
   * Pause or unpause the game
   */
  togglePause () {
    this.paused = !this.paused
  }
}