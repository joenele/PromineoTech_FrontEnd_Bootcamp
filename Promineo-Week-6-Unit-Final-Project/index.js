class Deck{
    constructor () {
        let deck = new Array(); // create new deck
        this.deck = deck;
    }

    createDeck() {
        this.rank = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King', 'Ace'];
        this.suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];


        // create a card from each rank and suit combination
        for (let i = 0; i < this.rank.length; i++) {
            for (let j = 0; j < this.suit.length; j++) {
                let card = new Array();
                card = {Rank: this.rank[i], Suit: this.suit[j]};
                this.deck.push(card); // push all cards to deck
            }
        }
    }


    shuffle(){
        // shuffle cards in deck
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    deal () {
        let player1Cards = new Array;
        let player2Cards = new Array;
        this.player1Cards = player1Cards;
        this.player2Cards = player2Cards;

        
        // deal half of deck to each player
        for (let i = 0; i < this.deck.length; i++){
            if (i % 2 == 0){
                this.player1Cards.push(this.deck[i]); 
            } else this.player2Cards.push(this.deck[i]);
        }
    }  
}


class Player{
    constructor(){
    let player1Score = 0;
    let player2Score = 0;
    this.player1Score = player1Score;
    this.player2Score = player2Score;
    }

    iterateTurns(){
        let turns = deck.deck.length / 2; // split turns equally 

        for (let i = 0; i < turns; i++){
            console.log(`---------------`);
            console.log(`ROUND: ${i+1}`); // increment rounds throughout the game

            // output rank and suit of each player's card
            console.log(`Player 1: ${deck.player1Cards[i].Rank} of ${deck.player1Cards[i].Suit}  | Player 2: ${deck.player2Cards[i].Rank} of ${deck.player2Cards[i].Suit}`);

            // check which card rank is higher
            if (deck.rank.indexOf(deck.player1Cards[i].Rank) > deck.rank.indexOf(deck.player2Cards[i].Rank)){
                console.log(`Player 1 wins this round`);
                this.player1Score++;
            } else 
            if (deck.rank.indexOf(deck.player2Cards[i].Rank) > deck.rank.indexOf(deck.player1Cards[i].Rank)){ 
                console.log(`Player 2 wins this round`);
                this.player2Score++;
            }
            // check if card ranks are the same
            else if (deck.rank.indexOf(deck.player2Cards[i].Rank) == deck.rank.indexOf(deck.player1Cards[i].Rank)) { 
                console.log(`******* TIE ********`)  
            } 

            // display player scores
            console.log(`Player 1 Score: ${this.player1Score} \t\t | Player 2 Score: ${this.player2Score}`  );
        }
        // empty deck after dealing all cards
        deck.deck.splice(0, deck.deck.length);
    }


    announceWinner() {
        // display which player won the game
        var winner;
        console.log(`********************************`)
        if (player.player1Score > player.player2Score){
            winner = `WAR GAME WINNER: PLAYER 1`
        } else if (player.player2Score > player.player1Score){
            winner = `WAR GAME WINNER: PLAYER 2`
        } else if ((player.player1Score == player.player2Score) && (player.player1Score !== 0)){
            winner = `NO WINNER: Both Players are Tied`
        } else if ((player.player1Score == 0) && (player.player1Score == 0))
        winner = `Invalid input`

        console.log(winner);
        console.log(`********************************`)
    }

    
}

// create deck and player instances
let deck = new Deck;
let player = new Player;

// Game functions
deck.createDeck();
deck.shuffle();
deck.deal();
player.iterateTurns();
player.announceWinner();


// Unit test on the announceWinner function
var expect  = chai.expect;

describe('WarGameWinner', function() {
    describe('#announceWinner', function () {
        it(`Should output a winner`, function() {
            var winner = announceWinner (player.player1Score, player.player2Score);
            expect(winner).to.equal(`${winner}`) // test passes if winner as expected
        });
        it('Should throw an error if winner is invalid', function() {
            expect(function() {
                announceWinner(player1Score, player.player2Score); //player1Score not declared to throw error
            }).to.throw(Error);
        });
    });
});