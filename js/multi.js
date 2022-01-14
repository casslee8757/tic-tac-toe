//dafault game status 
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
    //save jquery into variables
    const eachBoxes = $('.grid-box');
    let turn = $('#turn');
    let playerTurn = 0; //default player turn 
    
    const $gameStart = function(){
        eachBoxes.one('click', function(){
        const gridId = $(this).attr("id"); //call grid id from html using attr        
        const gridToNum = parseInt(gridId) //change the string value to integer 
        
            if(playerTurn === 0){
                //printing visual inputs on the grid board 
                $(this).html(player1); //"O"
                $(this).css('color', '#4e176c') //color input              
                playerTurn = 1; //switch player1 to player2
                //fade in and out effect for player1 
                turn.hide()
                turn.fadeIn(400)
                turn.html("TURN : PLAYER 1") //player1 input when switch turns
                board[gridToNum] = player1;//update player1 value('O') to the board 
                cellBoxes++ // increment for each turn (need for future draw)

            }else{
                //printing visual inputs on the grid board for player 2
                $(this).html(player2); // 'X' input 
                $(this).css('color', '#8f4ab8') // color input 
                playerTurn = 0; //switch player1 to player2 
                //fade in and out effect for player2
                turn.hide()
                turn.fadeIn(400)
                turn.html("TURN : PLAYER 2") //player2 input when switch turns 
                board[gridToNum] = player2; //update player2 value('X') to the board 
                cellBoxes++

            } //end of if else   

        checkWinningStatus(); //check winning function runs here

        });//end of eachBoxes
    }//end of gameStart 

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
                    playerScore1++; // score value gets added each win 
                    $('#score1').html(playerScore1); //update to the score on the screen 
                    turn.html("PLAYER 1 WINS"); // update player 1 wins text on the screen 
    
                }else{
                    playerScore2++;                       
                    $('#score2').html(playerScore2);
                    turn.html("PLAYER 2 WINS");
                    
                } //end of if statement 

            //draw = if the cell boxes reaches 9 return draw  
            }else if(cellBoxes === 9){
                turn.html("DRAW"); // print draw input on the screen   
                
            } //end of if statement  
                
        }// closing of for loop 
    } // function checkwinningstatus
        
    //reset function
    $('#game-reset-button').on('click', function(){
        //update the board array with empty strings
        board = [ '', '', '', '', '', '', '', '', ''];
        eachBoxes.empty(); //empty grid boxes 
        playerTurn = 0; //return to player 1 
        turn.html("CHOOSE PLAYER");//print choose the player on the screen
        cellBoxes = 0;
        //return to gameStart
        $gameStart();

    })//end of resetbutton function
    
    $('#score-reset-button').on('click', function(){
        playerScore1 = 0;
        playerScore2 = 0;
        $('#score1').html('0')
        $('#score2').html('0')

    })

    $gameStart(); //start the function 
    
    //colour theme

    $("#theme2").on('click', function(){
        $('body').removeClass('theme3').addClass('theme2');
        $('h1').removeClass('theme3','color').addClass('theme2');
        $('.grid-container').removeClass('theme3','background').addClass('theme2');
        $('.grid-box').removeClass('theme3','border').addClass('theme2');
        $('.body-container').removeClass('theme3','background').addClass('theme2');
        $('.score-player1').removeClass('theme3','background').addClass('theme2');
        $('.grid-box:hover').removeClass('theme3','background').addClass('theme2');
        $('.resetbutton').removeClass('theme3','background').addClass('theme2');
        $('.resetbutton:hover').removeClass('theme3','background').addClass('theme2');
        $('.player-switch').removeClass('theme3','background').addClass('theme2');
        $('.dropdown-colourtheme').removeClass('theme3','background').addClass('theme2');
        $('.dropdown-colourtheme:hover').removeClass('theme3','background').addClass('theme2');
        $('.button-container:hover .dropdown-colourtheme').removeClass('theme3','background').addClass('theme2');
        
    })
    
    $("#theme3").on('click', function(){

        $('body').removeClass('theme2').addClass('theme3');
        $('h1').removeClass('theme2','color').addClass('theme3');
        $('.grid-container').removeClass('theme2','background').addClass('theme3');
        $('.grid-box').removeClass('theme2','border').addClass('theme3');
        $('.body-container').removeClass('theme2','background').addClass('theme3');
        $('.score-player1').removeClass('theme2','background').addClass('theme3');
        $('.grid-box:hover').removeClass('theme2','background').addClass('theme3');
        $('.resetbutton').removeClass('theme2','background').addClass('theme3');
        $('.resetbutton:hover').removeClass('theme2','background').addClass('theme3');
        $('.player-switch').removeClass('theme2','background').addClass('theme3');
        $('.dropdown-colourtheme').removeClass('theme2','background').addClass('theme3');
        $('.dropdown-colourtheme:hover').removeClass('theme2','background').addClass('theme3');
        $('.button-container:hover .dropdown-colourtheme').removeClass('theme2','background').addClass('theme3');
        
    })
    
})//jquery function
