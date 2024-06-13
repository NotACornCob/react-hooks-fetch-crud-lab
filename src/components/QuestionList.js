import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, formData }) {
  console.log(questions);
  console.log(formData);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
{/*           {formData ? (
          <QuestionItem key={formData.id} question={formData} /> 
        ) : (
          null
          )} */}
      </ul>
    </section>
  );
}

export default QuestionList;