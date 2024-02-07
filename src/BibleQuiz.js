import React, { useState } from 'react';

function BibleQuiz() {
  const [oldTestament, setOldTestament] = useState(false);
  const [newTestament, setNewTestament] = useState(false);
  const [moses, setMoses] = useState(false);
  const [jesus, setJesus] = useState(false);
  const [sermonOnTheMount, setSermonOnTheMount] = useState(false);

  const handleOldTestament = () => {
    setOldTestament(true);
  };

  const handleNewTestament = () => {
    setNewTestament(true);
  };

  const handleMoses = () => {
    setMoses(true);
  };

  const handleJesus = () => {
    setJesus(true);
  };

  const handleSermonOnTheMount = () => {
    setSermonOnTheMount(true);
  };

  return (
    <div>
      <h1>Bible Quiz</h1>
      <p>The bible is consist of the Old and New testament </p>
      {oldTestament ? (
        <p style={{ color: 'green' }}>Correct!</p>
      ) : (
        <button onClick={handleOldTestament}>True</button>
      )}
      {newTestament ? (
        <p style={{ color: 'red' }}>Incorrect</p>
      ) : (
        <button onClick={handleNewTestament}>False</button>
      )}
      <p>Moses led the Israelites out of Egypt</p>
      {moses ? (
        <p style={{ color: 'green' }}>Correct!</p>
      ) : (
        <button onClick={handleMoses}>True</button>
      )}
      {jesus ? (
        <p style={{ color: 'red' }}>Incorrect</p>
      ) : (
        <button onClick={handleJesus}>False</button>
      )}
      <p>The Sermon on the Mount found in the book of Luke</p>
      {sermonOnTheMount ? (
        <p style={{ color: 'red' }}>Incorrect</p>
      ) : (
        <button onClick={handleSermonOnTheMount}>Luke</button>
      )}
    </div>
  );
}

export default BibleQuiz;