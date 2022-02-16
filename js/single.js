//dafualt game status 
let currentPlayer = "O"

let playerScore1 = 0;
let playerScore2 = 0;
let playerTurn = 0; //switches the turn on each click 
let cellBoxes = 0;
let playerChoice = "O" // keep tracks of single player the choice of symble for the player of human player 
let gameWinner = false; 

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

    const cssFunction = function(){
        turn.hide()
        turn.fadeIn(400)
    }

    const $switchPlayerTurn = function(){
        
        if(playerChoice === "O"){
            cssFunction();
            turn.html("TURN : PLAYER 1")
            humanAiTurn();

        }else{
            cssFunction();
            turn.html("TURN : PLAYER 2")
            humanAiTurn();
            
        }  // end of click if statement                
    }//end of gameStart 

    const humanAiTurn = function(){
        eachBoxes.one('click', function(){   
            const gridId = $(this).attr("id");
            const gridToNum = parseInt(gridId)

            if (playerChoice === "O"){
                board[gridToNum] = "O";
                $(this).html("O"); 

            }else{
                board[gridToNum] = "X";
                $(this).html("X"); 
            }

            $(this).css('color', '#4e176c') 
            playerTurn=0;
            cellBoxes++; 
            checkWinningStatus();   
            aiPlayer();
           

        });//end of eachboxes
        
    }//end of humanAiTurn

    // const checkWinner = function(checkWinningStatus){
    //     if(!checkWinningStatus){
    //         aiPlayer
    //     }else if (checkWinningStatus === 'win'){
    //         return;
    //     }
        
    // }


    const aiPlayer = function(){
        const emptyBox = $('.grid-box:empty')
        const emptyIndex = Math.floor(Math.random() * emptyBox.length);
        const emptyCell = emptyBox[emptyIndex]
        const gridBoxId = eachBoxes.attr('id')
        const emptyId = parseInt(emptyCell.gridBoxId)
        if (playerChoice === "O"){
            board[emptyId] = "X" 
            $(emptyCell).html("X");
        }else{
            board[emptyId] = "O" 
            $(emptyCell).html("O");
        }
        $(emptyCell).css('color','#8f4ab8');
        playerTurn=1;
        cellBoxes++

    }//aiPlayer
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
            //place each loop variales with the board array and save them into content a b and c
            let contentA = board[a];
            let contentB = board[b];
            let contentC = board[c];
            //compare the 3 loop variables to check 
            if (contentA === contentB && contentB === contentC && contentA !== "") {
                //if player wins the game turn off click event 
                $clickEvent = eachBoxes.off('click');  
                //check who wins the game 
                if (playerTurn === 0){
                    playerScore1++;
                    // console.log(playerScore1);
                    $('#score1').html(playerScore1);
                    turn.html("PLAYER 1 WINS");
                        
                }else{
                    playerScore2++; 
                    // console.log(playerScore2);
                    $('#score2').html(playerScore2);
                    turn.html("PLAYER 2 WINS");
                    
                } //end of if statement 
                return 'win'

            //draw = if the board does not include [''] string then return draw    
            }else if(cellBoxes === 9){
                turn.html("DRAW"); // print draw input on the screen   
                cellBoxes = 0;
                // console.log(cellBoxes);

            } //end of if statement  
            
        }// closing of for loop 
    } // function checkwinningstatus
        
    //reset function
    $('#game-reset-button').on('click', function(){
            //update the board array with empty strings
            board = [ '', '', '', '', '', '', '', '', ''];
            //empty grid boxes 
            $('.grid-box').html('')
            // turn.html("CHOOSE PLAYER");//print choose the player on the screen 
            // playerScore1 = 0;
            // playerScore2 = 0;
            cellBoxes = 0;
            playerTurn = 0;
            
            $clickEvent = eachBoxes.off('click');  
            humanAiTurn()

        })//end of resetbutton function
        
    $('#score-reset-button').on('click', function(){
            playerScore1 = 0;
            playerScore2 = 0;
            $('#score1').html('0')
            $('#score2').html('0')

    })

        
    $('#player1').one('click', function(){
        playerChoice ="O"
        cssFunction();
        turn.html("PLAYER 1") 

        $switchPlayerTurn();
    })
        
        
    $('#player2').one('click', function(){
        playerChoice ="X"
        cssFunction();
        turn.html("PLAYER 2")

        $switchPlayerTurn();
        
    })//end of player2 button 
    

   

    $("#theme2").on('click', function(){
        $('body').addClass('theme2');
        $('h1').removeClass('color').addClass('theme2');
        $('.grid-container').removeClass('background').addClass('theme2');
        $('.grid-box').removeClass('border').addClass('theme2');
        $('.body-container').removeClass('background').addClass('theme2');
        $('.score-player1').removeClass('background').addClass('theme2');
        $('.grid-box:hover').removeClass('background').addClass('theme2');
        $('.resetbutton').removeClass('background').addClass('theme2');
        $('.resetbutton:hover').removeClass('background').addClass('theme2');
        $('.player-switch').removeClass('background').addClass('theme2');
        $('.dropdown-colourtheme').removeClass('background').addClass('theme2');
        $('.dropdown-colourtheme:hover').removeClass('background').addClass('theme2');
        $('.button-container:hover .dropdown-colourtheme').removeClass('background').addClass('theme2');
        
    })
    
    $("#theme3").on('click', function(){

        $('body').addClass('theme3');
        $('h1').removeClass('color').addClass('theme3');
        $('.grid-container').removeClass('background').addClass('theme3');
        $('.grid-box').removeClass('border').addClass('theme3');
        $('.body-container').removeClass('background').addClass('theme3');
        $('.score-player1').removeClass('background').addClass('theme3');
        $('.grid-box:hover').removeClass('background').addClass('theme3');
        $('.resetbutton').removeClass('background').addClass('theme3');
        $('.resetbutton:hover').removeClass('background').addClass('theme3');
        $('.player-switch').removeClass('background').addClass('theme3');
        $('.dropdown-colourtheme').removeClass('background').addClass('theme3');
        $('.dropdown-colourtheme:hover').removeClass('background').addClass('theme3');
        $('.button-container:hover .dropdown-colourtheme').removeClass('background').addClass('theme3');
        
    })    

})//jquery function

