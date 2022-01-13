// Initialize Variables
let ting = new Audio("Assets/ting.mp3");
let gameover = new Audio("Assets/gameover.mp3");
let error = new Audio("Assets/error.mp3");
let turn = "X";
let boxes = document.getElementsByClassName("box");
let boxtext = document.getElementsByClassName("boxtext");
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let isgameover = false;

// Function to Change the turn
function changeTurn()
{
    if (turn == "X")
    {
        return turn="O";
    }
    else
    {
        return turn="X";
    }
}

// Function to check for a win
function checkWin()
{
    for (let i=0; i<win.length; i++)
    {
        if ( (boxtext[win[i][0]].innerText == boxtext[win[i][1]].innerText) && (boxtext[win[i][1]].innerText == boxtext[win[i][2]].innerText) && (boxtext[win[i][0]].innerText != '') && (boxtext[win[i][1]].innerText != '') && (boxtext[win[i][2]].innerText != ''))
        {
            document.getElementById("info").innerText = `Player "${turn}" won!`;
            isgameover = true;
            gameover.play();
            break;
        }
    }
}

// Game Logic
for (let i=0; i<boxes.length; i++)
{
    boxes[i].addEventListener('click',()=>{
        if (boxtext[i].innerHTML == '')
        {
            ting.play();
            boxtext[i].innerHTML = turn;
            checkWin();
            if (isgameover == false)
            {
                changeTurn();
                document.getElementById("info").innerText = `Turn for : ${turn}`;
            }
        }
        else
        {
            error.play();
        } 
    })
}

// Reset Button
document.getElementById("reset").addEventListener('click',()=>{
    for (let i=0; i<boxtext.length; i++)
    {
        boxtext[i].innerText = '';
    }
    isgameover = false;
    turn = "X";
    document.getElementById("info").innerText = `Turn for : ${turn}`;
})