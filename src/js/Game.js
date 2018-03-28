/**
 * Main class responsible for everything what is going on in the game
 * @constructor Game
 */
class Game {
  constructor () {
    // Bindings
    this.resizeCanvas = this.resizeCanvas.bind(this)

    this.View = {}
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.msGetInputContext('2d')
    this.paused = false
    this.score = 0
  }

  /**
   * Initalize the game and start it
   */
  start () {

  }

  /**
   * Restart the game
   */
  restart () {

  }

  /**
   * Resize canvas to standard width and height
   */
  resizeCanvas () {
    this.canvas.width = this.board.sizeX * this.board.tileWidth
    this.canvas.height = this.board.sizeY * this.board.tileWidth
  }

  /**
   * Fired when any key is pressed
   * @param {object} event - Document click event
   */
  onKeyDown (event) {
    let keyCode = event.keyCode
  }

  /**
   * Pause or unpause the game
   */
  togglePause () {
    this.paused = !this.paused
  }
}

export default Game