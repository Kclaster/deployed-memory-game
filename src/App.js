import React, { useState } from 'react';
import Pics from './Pics';

const App = () => {
  let [clickedPics, setClickedPics] = useState([]);
  let [newArr, setNewArr] = useState(false);
  let [score, setScore] = useState(0);

  const handleClick = (evt, num) => {
    console.log(num);
    if (clickedPics.includes(num)) {
      setScore(0);
      setClickedPics([]);
      setNewArr(!newArr);
    } else {
      setClickedPics([...clickedPics, num]);
      setScore(score + 1);
      setNewArr(!newArr);
    }
  };

  return (
    <div>
      <h1>Score: {score}</h1>
      <Pics newArr={newArr} handleClick={handleClick} />
    </div>
  );
};

export default App;
