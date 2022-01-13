//dafualt game status 
let gameActive = true;
let player1 = "O"
let player2 = "X"
let playerScore1 = 0;
let playerScore2 = 0;
let playerTurn = 0;

// debugger
//all winning posibilities 
const winningPossibilities = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal 
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
    
        //game start function 
        const $gameStart = function(){
            eachBoxes.on('click', function(){    
            //call grid id from html using attr
            const gridId = $(this).attr("id");
            //change the string value to integer 
            const gridToNum = parseInt(gridId)
            
        
            //printing visual inputs on the grid board 
            $(this).html(player1); //"O"
            $(this).css('color', '#27005e') //color input 
            //switch player1 to player2
            //fade in and out effect for player1 
            turn.hide()
            turn.fadeIn(400)
            //player1 input when switch turns 
            turn.html("TURN : PLAYER 1")
            //update player1 value('O') to the board 
            board[gridToNum] = player1;
            checkWinningStatus();
                
            playerTurn = 1;
            
            aiPlayer();
            checkWinningStatus();

            playerTurn = 0; 
            // else{
            //     // const randomPlay = Math.round(Math.random() * 8)
            //     // board[randomPlay] = player2 //'O'
            //     // $(`#${randomPlay}`).html(player2);
            //     // $('.grid-box:empty')
            //     // console.log(board[randomPlay])
            //     aiPlayer();
            //     playerTurn = 0; 
  
            // } 
            
             
            //check winning function runs here 
            
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
                        
                    } //end of if statement 

                //draw = if the board does not include [''] string then return draw    
                }else if(!board.includes('')){
                    turn.html("DRAW"); // print draw input on the screen   
                    
                } //end of if statement  
                

            }// closing of for loop 
        } // function checkwinningstatus
        
        //reset function
        $('.game-reset').on('click', function(){
            //update the board array with empty strings
            board = [ '', '', '', '', '', '', '', '', ''];
            //empty grid boxes 
            $('.grid-box').empty();
            //return to player 1 
            playerTurn = 0;
            turn.html("CHOOSE PLAYER");//print choose the player on the screen 
            playerScore1 = 0;
            playerScore2 = 0;
            //return to gameStart
            $gameStart();
            player1Button();
        })//end of resetbutton function
        
        $('.score-reset').on('click', function(){
            playerScore1 = 0;
            playerScore2 = 0;
            $('#score1').html('0')
            $('#score2').html('0')

        })

        
        const player1Button = function(){
            $('#player1').one('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 1") 
            playerTurn = 0; 
            console.log('clicked');

            buttonPlayer1Function()

            })
        }//end of player1button
        
        $('#player2').on('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 2")
            playerTurn = 1;
            
        })//end of player2 button 

        

        

        const buttonPlayer1Function = function(){
            if($('#player1').html() === "PLAYER 1"){    
                    $gameStart();

                if (playerTurn === 1){
                    aiPlayer();
                    
                }
                // const gridId = eachBoxes.attr("id");
                // console.log(gridId)
                // const gridToNum = parseInt(gridId)
                // console.log(gridToNum);
                // board[gridToNum] = player1;
                // eachBoxes.html(player1); //"O"
                // playerTurn = 1; 
                // console.log(board[gridToNum])
            } 
        //     console.log(randomPlay);
        }
    

        
    $gameStart(); //starting the function by calling it
    // aiPlayer();
    player1Button();

    

        $("#theme2").click(function(){
            $('body').addClass('theme2')
            $('h1').removeClass('color').addClass('theme2')
            $('.grid-container').removeClass('background').addClass('theme2')
            $('.grid-box').removeClass('border')
            $('.grid-box').addClass('theme2')
            $('.body-container').removeClass('background')
            $('.body-container').addClass('theme2')
            $('.score-player1').removeClass('background');
            $('.score-player1').addClass('theme2');
            $('.grid-box:hover').removeClass('background');
            $('.grid-box:hover').addClass('theme2');

        


        })



        const aiPlayer = function(){
            console.log('aiPlayer()');
            const emptyBox = $('.grid-box:empty')
            const emptyIndex = Math.floor(Math.random() * emptyBox.length);
            const emptyCell = emptyBox[emptyIndex]
            const emptyId = parseInt(emptyCell.id)

            board[emptyId] = player2 //'X'
            $(emptyCell).html(player2);
            console.log(board)

        
        }

        // console.log(aiPlayer());
})//jquery function





 

           