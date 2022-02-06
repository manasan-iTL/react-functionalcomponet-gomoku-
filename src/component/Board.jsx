import { useState } from "react";
import { calculateWinner } from "../helper/helper";
import { Square } from "./Square";

export const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (i) => {
      const oldSquares = squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const newSquares = oldSquares.map((oldsquare, index) => {
        /* あまりスマートではない
            処理の流れ
            mapで一つずつ取り出す
            押されたbuttonとインデックス番号があっているかを判定
            　あっていたらその中で先行か後攻かを判定
            あっていなかったら元の値(空だからnull)を返す
        */
        if(index === i) {
          if(xIsNext) {
            return oldsquare = "X";
          } else {
            return oldsquare = "O";
          }
        } else {
          return oldsquare;
        }
      })  
      setSquares(newSquares);
      setXIsNext(!xIsNext);
    };

    const renderSquares = (i) => {
      return <Square value = {squares[i]} onClick={() => handleClick(i)}/>;
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
      status = "Winner: " + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? "X": "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquares(0)} 
          {renderSquares(1)} 
          {renderSquares(2)} 
        </div>
        <div className="board-row">
          {renderSquares(3)} 
          {renderSquares(4)}
          {renderSquares(5)}  
        </div>
        <div className="board-row">
          {renderSquares(6)}
          {renderSquares(7)} 
          {renderSquares(8)}  
        </div>
      </div>
    );
};