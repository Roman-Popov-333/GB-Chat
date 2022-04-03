import React from 'react';
import { Message } from './components/Message';

const text = 'Какой нибудь текст';

export const lessonOne =() => {
  return (
    <div>
      <h1>Урок 1</h1>
        <h2><Message text={text} /> </h2>
    </div>
  )
}
export default lessonOne;