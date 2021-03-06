/**
 * Class responsible for providing information about block type and its location
 * @constructor Block
 */
export class Block {
  constructor (x, y) {
    // Generate Locations
    this.x = x
    this.y = y
    // Generate number from range ( 0 - 6 ) - 7 elements
    this.type = Math.round(Math.random() * 6) + 1
    this.shape = this.generateShape(this.type)
  }

  generateShape (type) {
    switch (type) {
      case 1:
        return [
          [1, 1, 1, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]
      case 2:
        return [
          [1, 0, 0],
          [1, 1, 1],
          [0, 0, 0]
        ]
      case 3:
        return [
          [0, 0, 1],
          [1, 1, 1],
          [0, 0, 0]
        ]
      case 4:
        return [
          [1, 1],
          [1, 1]
        ]
      case 5:
        return [
          [0, 1, 1],
          [1, 1, 0],
          [0, 0, 0]
        ]
      case 6:
        return [
          [0, 1, 0],
          [1, 1, 1],
          [0, 0, 0]
        ]
      case 7:
        return [
          [1, 1, 0],
          [0, 1, 1],
          [0, 0, 0]
        ]
    }
  }

  rotate () {
    this.shape = this.shape.reverse()
    for (var i = 0; i < this.shape.length; i++) {
      for (var j = 0; j < i; j++) {
        var temp = this.shape[i][j]
        this.shape[i][j] = this.shape[j][i]
        this.shape[j][i] = temp
      }
    }
  }

  get color () {
    switch (this.type) {
      case 1:
        return '#50ffb1'
      case 2:
        return '#50ffb1'
      case 3:
        return '#ff1053'
      case 4:
        return '#d7dedc'
      case 5:
        return '#9368b7'
      case 6:
        return '#6369d1'
      case 7:
        return '#e6c79c'
    }
  }
}
