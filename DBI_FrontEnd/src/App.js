import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Components/Table.js'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
      <img src="./logo_final.png" className="logo"></img>
      <nav>
        <ul className="nav" onClick={handleClick}>
          <li>Orders</li>
          <li id="selected">Users</li>
          <li>ProductList</li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
  );
}

function handleClick(clicked){
  console.log(clicked.target.innerHTML);
  var header = '';
  if(clicked.target.innerHTML === 'Users'){
    header = "Id,Firstname,Lastname,E-Mail,Cart,Orders,Edit,Delete";
  }
  else if(clicked.target.innerHTML === 'Orders'){
    header = "Id,OrderDate,UserName,FullPrice,Edit,Delete";
  }
  else{
    header = "Id,Name,Price,CreationDate,Add,Edit,Delete";
  }
  ReactDOM.render( 
  <React.StrictMode>
    <App/><Table header={header} headerName={clicked.target.innerHTML}/>
    </React.StrictMode>,document.getElementById('root'));
}

function renderHeader(){
  ReactDOM.render(<header>
    <div className="container">
      <img src="./logo_final.png" className="logo"></img>
      <nav>
        <ul className="nav" onClick={handleClick}>
          <li>Orders</li>
          <li id="selected">Users</li>
          <li>ProductList</li>
        </ul>
      </nav>
    </div>
  </header>, document.getElementById('root'));
}

function renderTable(header){
  ReactDOM.render(<Table header={header}/> ,document.getElementById('root'));
}

export default App;
