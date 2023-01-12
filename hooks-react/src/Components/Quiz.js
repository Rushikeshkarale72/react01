import QuizQues from "./QuizQues";
import { useState, useEffect } from "react";
export default function () {
  let dataset = [
    {
      question: "What is capital of Uttar Pradesh",
      options: ["Rajasthan", "UttarPradesh", "Delhi", "Lucknow"],
      anwser: "Lucknow"
    },
    {
      question: "What is capital of Karnataka",
      options: ["Rajasthan", "UttarPradesh", "Honkong", "Bangalore"],
      anwser: "Bangalore"
    },
    {
      question: "What is capital of Bihar",
      options: ["Rajasthan", "UttarPradesh", "Delhi", "Patna"],
      anwser: "Patna"
    },
    {
      question: "What is capital of Rajashthan",
      options: ["Rajasthan", "Jaipur", "Delhi", "Tamil-Nadu"],
      anwser: "Jaipur"
    },
    {
      question: "What is capital of Maharashtra",
      options: ["Rajasthan", "UttarPradesh", "Mumbai", "Tamil-Nadu"],
      anwser: "Mumbai"
    }
  ];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  useEffect(() => {
    shuffle(dataset);
    setCurrentQues({
      data: dataset[0],
      s_no: 1
    });
  }, []);

  const [currentQues, setCurrentQues] = useState({
    data: {
      question: "What is capital of America",
      options: ["Rajasthan", "UttarPradesh", "Delhi", "Tamil-Nadu", "UP"],
      anwser: "Delhi"
    },
    s_no: 1
  });

  const checkAnswer = (value) => {
    setTimeout(() => {
      if (currentQues.data.anwser === value) {
        alert("Your Answer Is Correct");
        setScore((prevValue) => prevValue + 5);
        setSubmission((prevValue) => {
          prevValue.push(true);
          return prevValue;
        });
      } else {
        alert("Your Answer Is Incorrect");
        setSubmission((prevValue) => {
          prevValue.push(true);
          return prevValue;
        });
      }
      if (currentQues.s_no === dataset.length) {
        setQuizStatus(0);
      }
      setCurrentQues((prevValue) => {
        return {
          data: dataset[prevValue.s_no],
          s_no: prevValue.s_no + 1
        };
      });
    }, 2000);
  };

  const [score, setScore] = useState(0);
  const [submission, setSubmission] = useState([]);
  const [quizStatus, setQuizStatus] = useState(1);

  return (
    <div>
      <h2>State Quiz</h2>
      <p>Current Score: {score}</p>

      {quizStatus ? (
        <QuizQues
          quesData={currentQues.data}
          quesNo={currentQues.s_no}
          totalQues={dataset.length}
          checkAnswer={checkAnswer}
        />
      ) : (
        <div>Quiz Ended</div>
      )}
    </div>
  );
}
