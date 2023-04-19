import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Game over!</h2>
      <p>Score: {quizState.score}</p>
      <p>
        You guessed {quizState.score} of {quizState.questions.length}{" "}
        questions.
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Retry</button>
    </div>
  );
};

export default GameOver;