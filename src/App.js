import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

const AppContainer = styled.div`
 margin: 40vh 30vw;
`
function toDoItem(p) {
  return (
    <div>
      <p>{p.name}</p>
    </div>
  )
}

function App() {
  //initial entries in tdl
  const [td, settd] = useState(["watch TV", "masturbate"])
  return (
    <AppContainer className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>STRESSED CPEN STUDENT'S TODO LIST</h1>
      </header> 
      <h1>MY LIST</h1>
      {td.map((item, i) => <toDoItem>
        key={i}
        name={item}
      </toDoItem>)}
    </AppContainer>
  );
}

export default App;
