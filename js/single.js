//dafualt game status 
let gameActive = true;
let player1 = "O"
let player2 = "X"
let playerScore1 = 0;
let playerScore2 = 0;
let playerTurn = 0;
let cellBoxes = 0;

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

    //game start function 
    const $gameStart = function(){
        eachBoxes.one('click', function(){    
            //call grid id from html using attr
            const gridId = $(this).attr("id");
            //change the string value to integer 
            const gridToNum = parseInt(gridId)
            //printing visual inputs on the grid board 
            if(playerTurn === 0){
                $(this).html(player1); //"O"
                $(this).css('color', '#27005e') //color input 
                //fade in and out effect for player1 
                turn.hide()
                turn.fadeIn(400)
                //player1 input when switch turns 
                turn.html("TURN : PLAYER 1")
                //update player1 value('O') to the board 
                board[gridToNum] = player1;
                checkWinningStatus();
                playerTurn = 1;
                cellBoxes++; // score value gets added each win
                aiPlayer();
                checkWinningStatus();

                playerTurn = 0; 
                   

            }else{
                $(this).html(player2); //"O"
                $(this).css('color', '#27005e') //color input 
                //fade in and out effect for player1 
                turn.hide()
                turn.fadeIn(400)
                //player1 input when switch turns 
                turn.html("TURN : PLAYER 2")
                //update player1 value('O') to the board 
                board[gridToNum] = player2;
                checkWinningStatus();
                playerTurn = 0;
                cellBoxes++; // score value gets added each win
                aiPlayer();
                checkWinningStatus();

                playerTurn = 1; 
                 
            }                    
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
            //place each loop variales with the board array and save them into content a b and c
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
                    $('#score2').html(playerScore1);
                    turn.html("PLAYER 2 WINS");
                    
                } //end of if statement 

            //draw = if the board does not include [''] string then return draw    
            }else if(cellBoxes === 9){
                turn.html("DRAW"); // print draw input on the screen   
                
            } //end of if statement  
            
        }// closing of for loop 
    } // function checkwinningstatus
        
        //reset function
        $('#game-reset-button').on('click', function(){
            //update the board array with empty strings
            board = [ '', '', '', '', '', '', '', '', ''];
            //empty grid boxes 
            $('.grid-box').empty();
            turn.html("CHOOSE PLAYER");//print choose the player on the screen 
            // playerScore1 = 0;
            // playerScore2 = 0;
            $gameStart();
            console.log(playerScore1);

        })//end of resetbutton function
        
        $('#score-reset-button').on('click', function(){
            playerScore1 = 0;
            playerScore2 = 0;
            $('#score1').html('0')
            $('#score2').html('0')
            console.log(playerScore1);

        })

        $('#player1').one('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 1") 
            playerTurn = 0; 
            console.log('clicked');
            $gameStart();

        })
        
        $('#player2').one('click', function(){
            turn.hide()
            turn.fadeIn(400)
            turn.html("PLAYER 2")
            playerTurn = 1;
            $gameStart();
            
        })//end of player2 button 
    
    const aiPlayer = function(){
        const emptyBox = $('.grid-box:empty')
        const emptyIndex = Math.floor(Math.random() * emptyBox.length);
        const emptyCell = emptyBox[emptyIndex]
        const gridBoxId = $('.grid-box').attr('id')
        const emptyId = parseInt(emptyCell.gridBoxId)

        if (playerTurn === 1){
            board[emptyId] = player2 //'X'
            $(emptyCell).html(player2);
        }else{
            board[emptyId] = player1 //'O'
            $(emptyCell).html(player1);
        }

    }//aiPlayer

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

