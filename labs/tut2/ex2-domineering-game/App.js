import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Button } from "react-native";

function Board() {
  const [board, setBoard] = useState(Array(10).fill(null).map(() => Array(10).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("V");
  const [message, setMessage] = useState("");

  const checkWin = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === null) {
          if (currentPlayer === "V" && i + 1 < 10 && board[i + 1][j] === null) {
            return false;
          }
          if (currentPlayer === "H" && j + 1 < 10 && board[i][j + 1] === null) {
            return false;
          }
        }
      }
    }
    Alert.alert("Game Over", `Player ${currentPlayer === "V" ? "H" : "V"} wins!`);
    return true;
  };

  const handClicked = (row, col) => {
    const newBoard = board.map((rowArr) => [...rowArr]);
    if (currentPlayer === "V") {
      if (row + 1 < 10 && !newBoard[row][col] && !newBoard[row + 1][col]) {
        newBoard[row][col] = "V";
        newBoard[row + 1][col] = "V";
        setBoard(newBoard);
        if (!checkWin()) setCurrentPlayer("H");
        setMessage("");
      } else {
        setMessage("Invalid move for player V");
      }
    } else if (currentPlayer === "H") {
      if (col + 1 < 10 && !newBoard[row][col] && !newBoard[row][col + 1]) {
        newBoard[row][col] = "H";
        newBoard[row][col + 1] = "H";
        setBoard(newBoard);
        if (!checkWin()) setCurrentPlayer("V");
        setMessage("");
      } else {
        setMessage("Invalid move for player H");
        if (checkWin()) return;
      }
    }
  };

  const handleReplay = () => {
    setBoard(Array(10).fill(null).map(() => Array(10).fill(null)));
    setCurrentPlayer("V");
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Domineering Game</Text>
      <Text style={styles.text}>Current Player: {currentPlayer === "V" ? "Vertical (V)" : "Horizontal (H)"}</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={`${rowIndex}-${colIndex}`}
                style={[styles.cell, cell === "V" ? styles.vCell : cell === "H" ? styles.hCell : {}]}
                onPress={() => handClicked(rowIndex, colIndex)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <View>
        <Button
          title="Replay"
          onPress={handleReplay}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  board: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cellText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  vCell: {
    backgroundColor: "#ff9999",
  },
  hCell: {
    backgroundColor: "#99ccff",
  },
  message: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
});

export default Board;
