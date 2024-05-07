import React, {useState} from "react";
import './App.css';
import {MyForm} from './Forum/forum';
import {MyRegister} from './Forum/Register.js';
const source={
  src:"https://logodix.com/logo/6765.jpg"
}
function App() {
    const [currentForm,setCurrentForm]= useState('login')
    const toggleForm = (FormName)=>{
        setCurrentForm(FormName);
    }
  return (

    <div className="App">
      <header className="App-header">
        <img src={source.src} className="App-logo" alt='logo' title='rolex-logo'/>
      </header>
        <main>
                  <div>{(currentForm==='login')? <MyForm onFormSwitch={toggleForm}/> : <MyRegister onFormSwitch={toggleForm}/>}</div>
        </main>
    </div>
  );
}
export default App;
