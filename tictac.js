let turn = "X";
let winner = "";

document.getElementById("turn").innerHTML = "Turn: " + turn;

   

function checkTurn() {
    if(turn == "X"){
        document.getElementById("turn").innerHTML = "Turn " + "X";   
    }
    else {
        document.getElementById("turn").innerHTML = "Turn " + "O";
    }
}

document.querySelectorAll(".xo_button")[0].addEventListener("click", () => {
    if (document.getElementById("button1").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button1").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button1").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});


document.querySelectorAll(".xo_button")[1].addEventListener("click", () => {
    if (document.getElementById("button2").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button2").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button2").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

document.querySelectorAll(".xo_button")[2].addEventListener("click", () => {
    if (document.getElementById("button3").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button3").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button3").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});


document.querySelectorAll(".xo_button")[3].addEventListener("click", () => {
    if (document.getElementById("button4").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button4").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button4").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

document.querySelectorAll(".xo_button")[4].addEventListener("click", () => {
    if (document.getElementById("button5").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button5").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button5").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});


document.querySelectorAll(".xo_button")[5].addEventListener("click", () => {
    if (document.getElementById("button6").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button6").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button6").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

document.querySelectorAll(".xo_button")[6].addEventListener("click", () => {
    if (document.getElementById("button7").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button7").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button7").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

document.querySelectorAll(".xo_button")[7].addEventListener("click", () => {
    if (document.getElementById("button8").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button8").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button8").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

document.querySelectorAll(".xo_button")[8].addEventListener("click", () => {
    if (document.getElementById("button9").innerHTML == "") {
        if (winner == "") {
            if (turn == "X") {
                document.getElementById("button9").innerHTML = "X";
                turn = "0";
            }
            else {
                document.getElementById("button9").innerHTML = "O";
                turn = "X";
            }
        }
    }
    checkTurn();
    win();

});

function win() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");   
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6"); 
    const button7 = document.getElementById("button7");
    const button8 = document.getElementById("button8");
    const button9 = document.getElementById("button9"); 
   // console.log("button1:", button1.innerHTML, "button2:", button2.innerHTML, "button3:", button3.innerHTML);   
   
    //horizontal_x
    if (button1.innerHTML === "X" && button2.innerHTML === "X" && button3.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button4.innerHTML === "X" && button5.innerHTML === "X" && button6.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    if (button7.innerHTML === "X" && button8.innerHTML === "X" && button9.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    //vertical_x 
    if (button1.innerHTML === "X" && button4.innerHTML === "X" && button7.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button2.innerHTML === "X" && button5.innerHTML === "X" && button8.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    if (button3.innerHTML === "X" && button6.innerHTML === "X" && button9.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    //diagonal_x
    if (button1.innerHTML === "X" && button5.innerHTML === "X" && button9.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button3.innerHTML === "X" && button5.innerHTML === "X" && button7.innerHTML === "X") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player X <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
   //For player O
    //horizontal_o
    if (button1.innerHTML === "O" && button2.innerHTML === "O" && button3.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button4.innerHTML === "O" && button5.innerHTML === "O" && button6.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    if (button7.innerHTML === "O" && button8.innerHTML === "O" && button9.innerHTML === "O") {
        winner = "X";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    //vertical_o 
    if (button1.innerHTML === "O" && button4.innerHTML === "O" && button7.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button2.innerHTML === "O" && button5.innerHTML === "O" && button8.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    if (button3.innerHTML === "O" && button6.innerHTML === "O" && button9.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
    
    //diagonal_o
    if (button1.innerHTML === "O" && button5.innerHTML === "O" && button9.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      } 
    
    if (button3.innerHTML === "O" && button5.innerHTML === "O" && button7.innerHTML === "O") {
        winner = "O";
        document.getElementById("winner").innerHTML = 'Winner is player O <button onclick= "play_again()">Play Again</button>'
        console.log("winner is " + winner);
      }    
   
    if(winner == "" && button1.innerHTML !== "" && button2.innerHTML !== "" && button3.innerHTML !== "" && button4.innerHTML !== "" && button5.innerHTML !== "" && button6.innerHTML !== "" && button7.innerHTML !== "" && button8.innerHTML !== "" && button9.innerHTML !== "") {
        document.getElementById("winner").innerHTML = 'The match is dropped <button onclick= "play_again()">Play Again</button>'; 
      } //forgot to put .innerHTML again!

    }

//Getting the play again button to acc work
function play_again(){
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button3").innerHTML = "";   
    document.getElementById("button4").innerHTML = "";
    document.getElementById("button5").innerHTML = "";
    document.getElementById("button6").innerHTML = ""; 
    document.getElementById("button7").innerHTML = "";
    document.getElementById("button8").innerHTML = "";
    document.getElementById("button9").innerHTML = ""; 
    winner = "";

    document.getElementById("winner").innerHTML = ""; 
}
