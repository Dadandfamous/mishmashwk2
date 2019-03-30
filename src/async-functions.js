/////// DON'T TOUCH //////////// 1

function giveItBackLater(value, callback) {
  function goodToGo() {
      callback(value)
  }
  setTimeout(goodToGo, 300)
}
/////// DON'T TOUCH //////////// 1


/////// DON'T TOUCH //////////// 2
function promiseToGiveItBackLater(value){

  return new Promise((resolve, reject) => {
    giveItBackLater(value, (value) => {
      resolve (value)
    })
  })
}
/////// DON'T TOUCH //////////// 2

///////// 3

// I am confident about the resolve, but the reject not so much. 
// Tried many things.

const addSomePromises = function (somePromise) {
   return new Promise ((resolve) => {
     console.log('foo')
     resolve(somePromise)
   }) .then (string => { return string + string
   }) .catch(string => { return string + string + string
   })
}

///////// 3

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}