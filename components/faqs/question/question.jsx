import React, { useState } from "react";
import SVG from "react-inlinesvg";
import classes from "./question.module.css";

export default function Question(props) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={classes.QAContainer}>
      <div className={classes.QuestionContainer}>
        <p className={classes.Question}>{props.question}</p>
        <SVG
          className={classes.ArrowDown}
          src="/svg/arrow_down.svg"
          onClick={() => setIsActive(!isActive)}
          style={{transform: isActive? "rotate(180deg)" : "rotate(0deg)"}}
        ></SVG>
      </div>
      <div
        className={classes.AnswerContainer}
        style={{ display: isActive ? "flex" : "none" }}
      >
        {props.answer.map((answer, key) => {
          return (
            <div className={classes.AnswerInnerContainer}>
              <p className={classes.Answer} key={key}>
                {answer.main}
              </p>
              {answer.subMain && (
                <div className={classes.FirstSubAnswer}>
                  {answer.subMain.map((answer, key) => {
                    return (
                      <div className={classes.SecondSubAnswer}>
                        <p className={classes.Answer} key={key}>
                          {answer.main}
                        </p>
                        {answer.innerAns && (
                          <div className={classes.ThirdSubAnswer}>
                            {" "}
                            {answer.innerAns.map((answer, key) => {
                              return (
                                <p className={classes.Answer} key={key}>
                                  {answer}
                                </p>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
