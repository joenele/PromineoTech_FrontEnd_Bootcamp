function announceWinner( winner) {
    // display which player won the game
    if(player.player1Score > player.player2Score){
        winner = `WAR GAME WINNER: PLAYER 1`
        return winner;
    } else if(player.player2Score > player.player1Score){
        winner = `WAR GAME WINNER: PLAYER 2`
        return winner;
    }
    else if((player.player1Score == player.player2Score) && (player.player1Score !==0)){
         winner = `NO WINNER: Both Players are Tied`
        return winner;
    } else ((player.player1Score < 0) || (player.player2Score < 0))
        throw new Error('Invalid input');
}