import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/TodoList'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash,faEdit, faCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit,faCheck)
function App() {
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
