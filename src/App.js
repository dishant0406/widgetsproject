import React from 'react';
import Accordion from './components/Accordian/Accordion';
import Search from './components/SearchWiki/search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Framework'
  },
  {
    title: 'Why use React?',
    content: 'React is famous!'
  },
  {
    title: 'How to learn React?',
    content: 'From Udemy or Youtube!'
  }
]

const App = () => {
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}

      <Search />
      <br />
    </div>
  )
}

export default App;