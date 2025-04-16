import React,{useState} from "react";
import "./App.css";

const Board = () => {
    const [board,setBoard] = useState(Array(10).fill(Array(10).fill(null)))
    const [currentPlayer,setCurrentPlayer] = useState("V")
    const [message,setMessage] = useState("")
    const hasValidMoves = (board,player) =>{
        for(let row = 0; row < board.length;row++){
            for (let col = 0; col < board[row].length; col++){
                if(player === "V"){
                    if(
                        row + 1 < board.length &&
                        !board[row][col] &&
                        !board[row + 1][col]
                    ){
                        return true
                    }
                }else if (player === "H"){
                    if(
                        col + 1 <board[row].length &&
                        !board[row][col] &&
                        !board[row][col + 1]
                    ){
                        return true
                    }
                }
            }
        }
        return false;
    }
    const handleClick = (row,col) =>{
        const newBoard = board.map((rowArr)=> [...rowArr])
        if(currentPlayer === "V"){
            if(
                row+1 < 10 &&
                !newBoard[row][col] &&
                !newBoard[row+1][col]
            ){
                newBoard[row][col] = "V";
                newBoard[row+1][col] = "V";
                setBoard(newBoard);
                setCurrentPlayer("H")
                setMessage("")
                if(!hasValidMoves(newBoard,"H")){
                    setMessage("Vertical player (V) wins!")
                    return;
                }
            }else{
                setMessage("Invalid move for Vertical player!")
            }
        }else if(currentPlayer === "H"){
            if(
                col + 1< 10 &&
                !newBoard[row][col] &&
                !newBoard[row][col+1]
            ){
                newBoard[row][col] = "H";
                newBoard[row][col+1] = "H";
                setBoard(newBoard);
                setCurrentPlayer("V")
                setMessage("")
                if(!hasValidMoves(newBoard,"V")){
                    setMessage("Horizontal player (H) wins!")
                    return;
                }
            }else{
                setMessage("Invalid move for Horizontal player")
            }
        } 
    }
    return (
        <div className = "game-container">
            <h1>Domineering Game</h1>
            <p>Current Player: {currentPlayer === "V" ?"Vertical (V)" :"Horizontal (H)"}</p>
            <div className="board">
            {board.map((row,rowIndex)=>row.map((cell,colIndex)=>(
                <div
                    key = {`${rowIndex}-${colIndex}`}
                    className = {`cell ${cell}`}
                    onClick = {()=> handleClick(rowIndex,colIndex)}
                >
                    {cell}
                </div>
            )))}
            </div>
            {message && <p className="error">{message}</p>}
        </div>
    )
}
export default Board;