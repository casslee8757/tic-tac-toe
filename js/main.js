//dafualt game status 
let gameActive = true;
let player1 = "O"
let player2 = "X"
let playerScore1 = 0;
let playerScore2 = 0;

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
        const $gameStart = function(){
            eachBoxes.one('click', function(){
            //call grid id from html using attr
            const gridId = $(this).attr("id");
            //change the string value to integer 
            const gridToNum = parseInt(gridId)
            
            if(playerTurn === 0){
                //printing visual inputs on the grid board 
                $(this).html(player1); //"O"
                $(this).css('color', '#27005e') //color input 
                //switch player1 to player2
                playerTurn = 1;
                //fade in and out effect for player1 
                turn.hide()
                turn.fadeIn(400)
                //player1 input when switch turns 
                turn.html("PLAYER 1")
                //update player1 value('O') to the board 
                board[gridToNum] = player1;
    
            }else{
                //printing visual inputs on the grid board for player 2
                $(this).html(player2); // 'X' input 
                $(this).css('color', '#7a36a1') // color input 
                //switch player1 to player1 
                playerTurn = 0;
                //fade in and out effect for player2
                turn.hide()
                turn.fadeIn(400)
                //player2 input when switch turns 
                turn.html("PLAYER 2")
                //update player2 value('X') to the board 
                board[gridToNum] = player2;
            }        
            //check winning function runs here 
            checkWinningStatus();
        });//end of eachBoxes
        }//end of gameStart 

        //winning status function
        const checkWinningStatus = function(){
            //loop through the winning possibilities array 
            for (let i = 0; i < winningPossibilities.length; i++){
                //save the winning possibilities loop into a variable 
                const winning = winningPossibilities[i];
                //save winning possibilities loop into 3 different variables = 3 loops 
                let a = winning[0]
                let b = winning[1]  
                let c = winning[2]
                //place each loop variales with the board array and save them into content a b and

                //call the grid box id from html and loop them
                let contentA = board[a];
                let contentB = board[b];
                let contentC = board[c];

                //compare the 3 loop variables to check 
                if (contentA === contentB && contentB === contentC && contentA !== "") {
                    //if player wins the game turn off click event 
                    $clickEvent = eachBoxes.off('click');  

                    //check who wins the game 
                    if (playerTurn === 1){
                        playerScore1++;
                        $('#score1').html(playerScore1);
                        turn.html("PLAYER 1 WINS");
                        


                    }else{
                        playerScore2++;                       
                        $('#score2').html(playerScore2);
                        turn.html("PLAYER 2 WINS");
                        
                    } //end of

                //draw = if the board does not include [''] string then return draw    
                }else if(!board.includes('')){
                    turn.html("DRAW"); // print draw input on the screen     
                } //end of if statement    
            }// closing for 
        } // function checkwinningstatus
        
        //reset function
        $('.game-reset').on('click', function(){
            //update the board array with empty strings
            board = [ '', '', '', '', '', '', '', '', ''];
            //update them in html 
            $('.grid-box').empty();
            //return to player 1 
            playerTurn = 0;
            turn.html("CHOOSE PLAYER");//print choose the player on the screen 
            //return to gameStart
            $gameStart();
        })//end of resetbutton function
        
        $('.score-reset').on('click', function(){
            playerScore1 = 0;
            playerScore2 = 0;
            $('#score1').html('0')
            $('#score2').html('0')

        })


        $('#player1').on('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 1")


        })


        $('#player2').on('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 2")


        })

        
    $gameStart(); //starting the function by calling it

})//jquery function





