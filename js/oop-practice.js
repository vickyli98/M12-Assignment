// STEP 1
/*
  class Cat {
    constructor() {

    }
  }

  const Dog = class {
    constructor() {

    }
  }
*/
// STEP 2
/*
  const cat1 = new Cat()
  const dog1 = new Dog()
*/
// STEP 3
/*
  class Animal{
    constructor() {
      console.log('The Animal has been created')
    }
  }

  const animal1 = new Animal()
*/
// STEP 4
/*
  class Animal{
    constructor(message) {
      console.log(message)
    }
  }

  const animal1 = new Animal('The Animal has been created')
*/
// STEP 5
/*
  class Animal{
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height = height
      this.length = length
    }
  }
  const animal1 = new Animal('cat', 'british shorthair', 'black and white', '1ft', '1.5ft')
*/
// STEP 6
/*
  for (let property in animal1) {
    if (animal1.hasOwnProperty(property)) {
      console.log(`${property}: ${animal1[property]}`)
    }
  }
*/
// STEP 7
/*
  class Animal{
    constructor(type, breed, color, height, length) {
      this.type = type
      this.breed = breed
      this.color = color
      this.height = height
      this.length = length
    }
    speak = function() {
      if (this.type === 'dog') {
        console.log(`The ${this.color} dog is barking!`)
      } else if (this.type === 'cat') {
        console.log(`The ${this.color} cat is meowing!`)
      }
    }
  }
  const animal1 = new Animal('cat', 'british shorthair', 'black and white', '1ft', '1.5ft')
  animal1.speak()
*/
// STEP 8
/*
  class Animal{
    constructor(type, breed, color, height, length) {
      let _type = type
      let _breed = breed
      let _color = color
      let _height = height
      let _length = length
      let checkType = function() {
        if (_type === 'dog') {
          return 'dog'
        } else {
          return 'cat'
        }
      }
      this.speak = function() {
        console.log(`The ${checkType()} has made a noise!`)
      }
    }
  }
  const animal1 = new Animal('cat', 'british shorthair', 'black and white', '1ft', '1.5ft')
  animal1.speak()
*/
// STEP 9
String.prototype.findWords = function(word) {
  const paragraph = this.toLowerCase()
  const regex = new RegExp('\\b' + word.toLowerCase() + '\\b', 'g')
  const matches = paragraph.match(regex)

  if (matches) {
    alert(`The word "${word}" was found ${matches.length} time(s) in the paragraph.`)
  } else {
    alert(`The word "${word}" was not found in the paragraph.`)
  }
}

const paragraph = 'The quick brown fox jumped over the lazy dog.'
paragraph.findWords('fox')