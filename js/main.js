//dafualt game status 
let gameActive = true;

let player1 = "X"
let player2= "O"

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

let board = [ '', '', '', '', '', '', '', '', ''];

//Jquery function starts 
$(function(){

    //save jquery grid-box variable 
    const eachBoxes = $('.grid-box');
    let turn = $('#turn');
    
    //default player turn 
    let playerTurn = 0;
    // debugger
        //
        $clickEvent = eachBoxes.one('click', function(){
            const gridId = $(this).attr("id");
            const gridToNum = parseInt(gridId)

            console.log('clicked')
            if(playerTurn === 0){
                $(this).html("O");
                $(this).css('color', '#27005e')
                playerTurn = 1;
                turn.html("Player 1")
                board[gridToNum] = "O";
                console.log(board)
            
                
            }else{
                $(this).html("X");
                $(this).css('color', '#7a36a1')
                playerTurn = 0;
                turn.html("Player 2")
                board[gridToNum] = "X";
                console.log(board)

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
                const contentA = board[a];
                const contentB = board[b];
                const contentC = board[c];

                // console.log(a, contentA);
                // console.log(b, contentB);
                // console.log(c, contentC);

                // console.log('------');

                if (contentA === contentB && contentB === contentC && contentA !== "") {
                    $clickEvent = eachBoxes.off('click');
                    gameActive = false;
                    console.log('game over');
                    turn.html("Game over");
                    return
                    
                }
                // else{
                //     console.log('draw')
                // }
                //counter variables that can save how many time the border have clicked 

            }// closing for 
        } // function checkwinningstatus


        
        // $('.reset-button').on('click'){
        //     if()
        //     $clickEvent = null;
        // }

})//jquery function





