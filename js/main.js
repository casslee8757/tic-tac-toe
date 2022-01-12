//dafualt game status 
let gameActive = true;
let player1 = "O"
let player2 = "X"
// debugger
//all winning posibilities (first 3 = horizontal , next 3 = vertical , last 2 = diagonal )
const winningPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//empty board array 
let board = [ '', '', '', '', '', '', '', '', ''];

//Jquery function starts 
$(function(){

    //save jquery grid-box variable 
    const eachBoxes = $('.grid-box');
    let turn = $('#turn');
    
    //default player turn 
    let playerTurn = 0;

        //game start function 
        $gameStart = eachBoxes.one('click', function(){
            //call grid id from html using attr
            const gridId = $(this).attr("id");
            //change the string value to integer 
            const gridToNum = parseInt(gridId)
            
            if(playerTurn === 0){
                //printing visual inputs on the screen 
                //printing 'O' in the grid 
                $(this).html(player1);
                $(this).css('color', '#27005e')
                
                //switch player 
                playerTurn = 1;
                //player input 1 for switch turns 
                turn.hide()
                turn.fadeIn(1000)
                turn.html("Player 1")
                
                //push player1 value to the board 
                board[gridToNum] = player1;
    
            }else{
                $(this).html(player2);
                $(this).css('color', '#7a36a1')
                //switch player to 0
                playerTurn = 0;
                turn.hide()
                turn.fadeIn(1000)
                turn.html("Player 2")
                
                board[gridToNum] = player2;
            }        
            //check winning function runs here 
            checkWinningStatus();
        });//end of clickevent 

        //winning status function
        const checkWinningStatus = function(){
            //looping through the winning possibilities array 
            for (let i = 0; i < winningPossibilities.length; i++){
                //save the loop into a variable 
                const winning = winningPossibilities[i];
                //let the loop repeats 3 times and save them in a,b,c variables each. 
                let a = winning[0]
                let b = winning[1]  
                let c = winning[2]
                
                //call the grid box id from html and loop them
                let contentA = board[a];
                let contentB = board[b];
                let contentC = board[c];

                //compare the 3 loop variables to check 
                if (contentA === contentB && contentB === contentC && contentA !== "") {
                    //if player wins the game turn off click event 
                    $clickEvent = eachBoxes.off('click');                    
                    console.log('game over');
                    turn.html("Game over");
                    return

                //draw = if the board does not include [''] string then return draw    
                }else if(!board.includes('')){
                    console.log('draw');
                    turn.html("Draw");
                
                } //end of if statement 
                
            }// closing for 
        } // function checkwinningstatus
        
        
        //reset function
        $('.reset-button').on('click', function(){
            //update the board array with empty strings
            board = [ '', '', '', '', '', '', '', '', ''];
            //update them in html 
            $('.grid-box').html('')
            //return to player 1 
            playerTurn=0;
            turn.html("CHOOSE THE PLAYER");
            $gameStart();
            
        })
            
        $('#playerO').on('click', function(){
            console.log('clicked')
        })
    
            
        

})//jquery function





