import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({props}) {

const [defaultQuestions, setDefaultQuestions] = useState([]);

function handleDeleteQuestion(deletedQuestion) {
  const updatedQuestions = defaultQuestions.filter((question) => question.id !== deletedQuestion.id);
  setDefaultQuestions(updatedQuestions);
}


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setDefaultQuestions(questions));
  }, []);

  console.log({defaultQuestions})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {defaultQuestions.map((question) => (
          <QuestionItem key={question.id} question={question} answers={question.answers} correctIndex={question.correctIndex} onDeleteQuestion={handleDeleteQuestion} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;