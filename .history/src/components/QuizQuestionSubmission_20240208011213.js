import React, { useState } from 'react';
import './QuizQuestionSubmission.css';

const QuizQuestionSubmission = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [subject, setSubject] = useState('');

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = () => {
    if (
      questionText.trim() === '' ||
      options.some((option) => option.trim() === '') ||
      subject.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    const questionData = {
      questionText,
      options,
      correctAnswer: options[correctAnswerIndex],
      difficulty,
      subject,
    };

    // Your logic to add the question data to the quiz database

    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswerIndex(0);
    setDifficulty('easy');
    setSubject('');

    alert('Question submitted successfully!');
  };

  return (
    <div className="quiz-question-submission">
      <h2>Submit Quiz Question</h2>
      <div className="form-group">
        <label>Question Text:</label>
        <textarea
          className="form-control"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option${index}`}
              name="correctAnswer"
              value={index}
              checked={correctAnswerIndex === index}
              onChange={() => setCorrectAnswerIndex(index)}
            />
            <input
              type="text"
              className="form-control"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="form-group">
        <label>Difficulty Level:</label>
        <select
          className="form-control"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="form-group">
        <label>Subject/Category:</label>
        <input
          type="text"
          className="form-control"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QuizQuestionSubmission;