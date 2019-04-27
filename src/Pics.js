import React, { useEffect, useState } from 'react';
import one from './pics/gary.jpg';
import two from './pics/karen.jpg';
import three from './pics/krabs.jpg';
import four from './pics/larry.jpg';
import five from './pics/patrick.jpg';
import six from './pics/pearl.jpg';
import seven from './pics/plankton.jpg';
import eight from './pics/puff.jpg';
import nine from './pics/sandy.jpg';
import ten from './pics/spongebob.jpg';
import eleven from './pics/squidward.jpg';
import twelve from './pics/squilliam.jpg';

const Pics = props => {
  const arr = [
    [one, 1],
    [two, 2],
    [three, 3],
    [four, 4],
    [five, 5],
    [six, 6],
    [seven, 7],
    [eight, 8],
    [nine, 9],
    [ten, 10],
    [eleven, 11],
    [twelve, 12]
  ];

  let [dispArr, setdispArr] = useState(arr);

  useEffect(() => {
    console.log('matata');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setdispArr(arr);
  }, [props.newArr]);

  return dispArr.map(cur => {
    return (
      <img
        onClick={evt => props.handleClick(evt, cur[1])}
        key={cur[1]}
        src={cur[0]}
        alt={cur[1]}
        number={cur[1]}
      />
    );
  });
};

export default Pics;
