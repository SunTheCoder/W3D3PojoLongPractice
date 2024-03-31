/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
***********************************************************************/


function countScores(people) {    ////try summing objects and consolidating first

    let object = {}
    //let arr = []
  
        for (let obj of people) {
          
            if (!(obj.name in object)) {
              object[obj.name] = obj.score
            } else if (obj.name in object) {
              //console.log(object[obj.name])
              object[obj.name] = object[obj.name] + obj.score
            }
            //console.log(object)
        }

        // }
           return object

           ///if typeof value = string for key
       
}


///for of and simply check type of keys and if it is already in index 

let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

//Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
