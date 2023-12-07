// initial screen
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert('Let\'s go');

//ask user for their name
const player_name = prompt('Hi there. What\'s your name?');

alert(`Hi ${player_name}  — Welcome to The Mars Adventure Game.`);
alert('Yesterday, you received a call from your good friend at NASA');
alert('They need someone to go to Mars this weekend, and YOU\’VE been chosen!!');

//ask user a question
const excited = prompt('Are you excited? (Type Y or N)');

if (excited.toUpperCase() === 'Y') {
    alert('I knew you\'d say that. It\'s so cool that you\'re going to Mars!');
} else {
    alert('Well, it\’s too late to back out now.');
}

//suitcases
alert('It\'s time to pack for your trip to Mars.');
let num_suitcases = Number(prompt('How many suitcases do you plan to bring?'));

if (num_suitcases > 2) {
    alert('That\'s way too many. You\'ll have to pack more lightly');
    alert('Please try to fit your stuff into 2 suitcases.');
} else {
    alert('You\'ll certainly fit in the spaceship!')
}

//companion animal
alert('You\'re allowed to bring one companion animal with you.');

const companion_type = prompt('What kind of companion animal would you like to bring?');
let companion_name = prompt('What is your companion\'s name?');

let first_letter = companion_name[0];
first_letter = first_letter.toUpperCase();

let other_lettters = companion_name.slice(1);
other_lettters = other_lettters.toLowerCase();

companion_name = first_letter + other_lettters;

alert(`Cool so you\'re bringing ${companion_name} the ${companion_type}`);

//decor
alert('NASA has a interior design team offering to outfit your space ship.');
let decor_choice = 
prompt(`You have a couple of options for the interior decor of your ship. Your options are:

    A)  Sleek, modern minimalism
    B)  Retro/vintage space age
    C)  Victorian-era steampunk

Please input your choice:
`);

decor_choice = decor_choice.toUpperCase();

let decor;
if (decor_choice === 'A') {
    decor = 'modern minimalist';
} else if (decor_choice === 'B') {
    decor = 'retro';
} else if (decor_choice === 'C') {
    decor = 'steampunk';
}

//display
alert(`${player_name} and ${companion_name}, surfing the celestial abyss, in a ${decor} spaceship.`);

//timer
let timer = 5;
while (timer > 0) {
    alert(`${timer}...`);
    timer--;
}
alert('*** LIFTOFF ***');