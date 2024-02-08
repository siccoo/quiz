import React, { useState, useEffect } from 'react';
import './QuizQuestionSubmission.css';

const QuizQuestionSubmission = () => {
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    // Fetch the mock API data (replace with your actual API call in a real application)
    fetch('/path/to/mockApiData.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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

    const newQuestion = {
      questionText,
      options,
      correctAnswer: options[correctAnswerIndex],
      difficulty,
      subject,
    };

    // Assuming you have a mock API endpoint or JSON file
    // In a real application, you would typically send this data to the server
    console.log('New Question Data:', newQuestion);

    // Clear the form after submission
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
          <input
            key={index}
            type="text"
            className="form-control"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="form-group">
        <label>Correct Answer:</label>
        <select
          className="form-control"
          value={correctAnswerIndex}
          onChange={(e) => setCorrectAnswerIndex(parseInt(e.target.value))}
        >
          {options.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
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

      {/* Displaying questions from mock data */}
      <div className="mock-questions">
        <h3>Mock Questions</h3>
        <ul>
          {questions.map((mockQuestion) => (
            <li key={mockQuestion.id}>
              <strong>{mockQuestion.questionText}</strong>
              <ul>
                {mockQuestion.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <p>Correct Answer: {mockQuestion.correctAnswer}</p>
              <p>Difficulty: {mockQuestion.difficulty}</p>
              <p>Subject: {mockQuestion.subject}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizQuestionSubmission;