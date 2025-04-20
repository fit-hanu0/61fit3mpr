import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const size = 10;
    const [board, setBoard] = useState(Array(size * size).fill(null));
    const [isVerticalTurn, setIsVerticalTurn] = useState(true);

    const checkWin = () => {
        for (let i = 0; i < size * size; i++) {
            if (
                i + size < size * size &&
                board[i] === null &&
                board[i + size] === null
            ) {
                return false;
            }
            if (
                (i + 1) % size !== 0 &&
                board[i] === null &&
                board[i + 1] === null
            ) {
                return false;
            }
        }
        return true;
    };



    const handleClick = (index) => {
        if (board[index] !== null) return;

        const newBoard = [...board];

        if (isVerticalTurn) {
            if (index + size >= size * size || board[index + size] !== null) {
                return;
            }
            newBoard[index] = "V";
            newBoard[index + size] = "V";
        } else {
            if ((index + 1) % size === 0 || board[index + 1] !== null) {
                return;
            }
            newBoard[index] = "H";
            newBoard[index + 1] = "H";
        }

        setBoard(newBoard);

        if (checkWin()) {
            alert(`${isVerticalTurn ? "Horizontal Player" : "Vertical Player"} Wins!`);
        } else {
            setIsVerticalTurn(!isVerticalTurn);
        }
    };

    return (
        <div>
            <h2>{isVerticalTurn ? "Vertical Player's Turn" : "Horizontal Player's Turn"}</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${size}, 50px)`,
                    gridGap: 0,
                    placeSelf: "center"
                }}
            >
                {board.map((value, index) => (
                    <Square
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;