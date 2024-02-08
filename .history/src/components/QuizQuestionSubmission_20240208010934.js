import React, { useState } from 'react';

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
    // Validate inputs
    if (questionText.trim() === '' || options.some(option => option.trim() === '') || subject.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Additional validation (e.g., correctAnswerIndex within the options range)

    // Submit the question to the database
    const questionData = {
      questionText,
      options,
      correctAnswer: options[correctAnswerIndex],
      difficulty,
      subject,
    };

    // Your logic to add the question data to the quiz database

    // Clear the form after submission
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswerIndex(0);
    setDifficulty('easy');
    setSubject('');

    alert('Question submitted successfully!');
  };

  return (
    <div>
      <h2>Submit Quiz Question</h2>
      <div>
        <label>Question Text:</label>
        <textarea value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <select value={correctAnswerIndex} onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value))}>
          {options.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Difficulty Level:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label>Subject/Category:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestionSubmission;