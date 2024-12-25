import React from 'react';
import './index.css';
import FacebookEmojiCounter from './Facebookemoji'; // Import FacebookEmojiCounter

function App() {
  return (
    <div className="App">
      <h1>Facebook Emoji Counter</h1>
      <FacebookEmojiCounter type="Like" />
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="happy" />
    </div>
  );
}

export default App;
