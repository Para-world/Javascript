const Cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// Cards.sort(() => Math.random() - 0.5); This was not best method to get random outcome

// Instead of this we will use Fisher-Yates algorithm

shuffle(Cards);

console.log(Cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}