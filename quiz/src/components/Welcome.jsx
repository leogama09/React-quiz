import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Welcome!</h2>
      <p>Click on the button below to get started:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Start
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;