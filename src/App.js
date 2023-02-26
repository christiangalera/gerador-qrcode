import './App.css';
import { useState } from 'react';
import QRCodeCanvas from './QRCodeCanvas';

function App() {
  const [text, setText] = useState()

  return (
    <div className="App">
      <input placeholder= "Digite alguma URL ou texto" onChange={(e) => {setText(e.target.value)}} value={text}/>
      <QRCodeCanvas text={text} />
    </div>
  );
}

export default App;
