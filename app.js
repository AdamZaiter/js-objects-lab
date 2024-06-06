const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  };

// console.dir(pokemon, { maxArrayLength: null })


// console.log(game.items) 

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Hard";
// using the 'difficulty' property to assign Hard to it.

// console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

const starterPokemon = pokemon.find(p => p.starter);
// This is used to find the first pokemon, set to true 
game.party.push(starterPokemon);
// Adds the starter pokemon that it found to the party array.

// console.log(game); 
// Continuing the theme of commenting the console log out after tests for this lab 

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


const additionalPokemon1 = pokemon.find(p => p.type === 'water' && p.hp > 40);
const additionalPokemon2 = pokemon.find(p => p.type === 'fire' && p.hp > 50);
const additionalPokemon3 = pokemon.find(p => p.type === 'Electric' && p.hp> 30);
// Assigning 3 new additional pokemons 'additionalPokemon1,2,3' And finding them with water and more than 40 hp, fire and more than 50hp, Electric and more that 30hp.

game.party.push(starterPokemon);

// console.log(game.party); 

// logged to verify they were added.

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
})
// If the difficulty is more than 3 it will return falso

// console.log(game)

// logged this to confirm, then commented it out.

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

function evolveStarterPokemon(party) { // defined the function for the evolve starter pokemon
    const evolutionMap = {
        1: 2,
        4: 5,
        7: 8,
        25: 26
    } // defined all the Pokemons and their evolutions

    // using the find Index to find the starter Pokemon in the party array
    const starterIndex = party.findIndex(p => p.starter);

    if (starterIndex !== -1) {
        const starter = party[starterIndex];
        const evolvedNumber = evolutionMap[starter.number];
        const evolvedPokemon = pokemon.find(p => p.number === evolvedNumber);

        // Splice to replace the starter pokemon with the evolved one.
        party.splice(starterIndex, 1, evolvedPokemon)
    }
}

// Evolve in the party array
evolveStarterPokemon(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach(pokemon => { // Using forEach to print each name in the party
    console.log(pokemon.name); // log it to print each
})

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon  // Pokemon starter
    .filter(p => p.starter)  //filtering array to only allow starter pokemons 
    .forEach(starter => { 
        console.log(starter.name); // print the starters 
    })

/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// Add catchPokemon to the game object
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj); // Push the pokemonObj to the game.party array
};

const chosenPokemon = pokemon.find(p => p.number === 59); //
game.catchPokemon(chosenPokemon);

// console.log(game); // logged to verify, commented out at the end.

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


// Need to add modified method to the game object
game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj); //added pokemonObj to the game.party array

    const pokeballItem =this.items.find(item => item.name === 'pokeball'); //this will find the pokeball item is the games.items afrray 

    if (pokeballItem) {
        pokeballItem.quantity -= 1; //reduce by 1 the quantity of poke ball
    }
};

const anotherChosenPokemon = pokemon.find(p => p.number === 25);
game.catchPokemon(anotherChosenPokemon);

// calling the catcPokemon from the pokemon array 

// console.log(game.party)
// console.log (game.items)

// logged them to test that it was pushed properly, commented out afterwards ,.. 

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


// need to do a loop through the gyms array and update the completed for anyhtinf under 6
game.gyms.forEach(gym => {
    if (gym.difficulty <  6) {
        gym.completed = true;
    }
});

// console.log(game.gyms); // LOGGED TO TEST IT, COMMENTED OUT AFTER.

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

// Add gymStatus method to game object
game.gymStatus = function() {
    const gymTally = { completed: 0, incomplete: 0 }; // initializing gym tally object

    this.gyms.forEach (gym => {
        if (gym.completed) {
            gymTally.completed += 1; // add one each time to completed count
        } else {
            gymTally.incomplete += 1; // add one to incomplete count
        }
    });

    console.log(gymTally); // logging the value of gymTally
};

// game.gymStatus(); // use to verify (5 complete, 3 incomplete) quoted out. 

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

// Add partyCount to game object
game.partyCount = function() {
    return this.party.length; //return with the number of pokemon in the party
}; 

// call to verify
const numberOfPokemonInParty = game.partyCount();
// console.log(numberOfPokemonInParty); // log the number of pokemon in the party 

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

// loop through the gyms array and update with difficulty under 8
game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

// console.log(game.gyms); // log to verify updated correctly 

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game); // log to make sure all the changes appear. They did.

// Struggled a bit with this one, but referenced the resources and other material online to complete the lab. I feel like my issue is that 
// I do not memorize how to do things, i have trouble figuring out what to being logging or typing, but with a little help I remember and understand how to do it.

