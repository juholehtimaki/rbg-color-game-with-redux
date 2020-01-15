import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Option } from "./Option.jsx";
import { setQuestion } from "../actions/index.js";
import Grid from "@material-ui/core/Grid";

export const Game = () => {
  const score = useSelector(state => state.score);
  const question = useSelector(state => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    const generateQuestion = () => {
      let options = [];

      //correct option
      let option = {
        color: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        },
        correctness: true
      };

      options.push(option);

      //fake options
      while (options.length < 4) {
        option = {
          color: {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
          },
          correctness: false
        };
        options.push(option);
      }

      //shuffles options in random order
      options.sort(() => Math.random() - 0.5);

      dispatch(setQuestion(options));
    };
    generateQuestion();
  }, [dispatch, score]);

  const questionRender = () => {
    if (question) {
      let correctAnswer;
      for (let option of question) {
        if (option.correctness) correctAnswer = option.color;
      }
      return (
        <>
          <h4>
            Pick the color: ({correctAnswer.r}, {correctAnswer.g},{" "}
            {correctAnswer.b})
          </h4>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="answers-box"
          >
            {question.map(option => (
              <Option
                option={option}
                key={option.color.r + option.color.g + option.color.b}
              />
            ))}
          </Grid>
        </>
      );
    }
  };

  return (
    <div>
      <h3>Your score: {score}</h3>
      {questionRender()}
    </div>
  );
};
