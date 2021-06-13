import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';
import CustomOrderTable from './Components/Table/CustomOrderTable';
import CustomUserTable from './Components/Table/CustomUserTable';
import CustomProductTable from './Components/Table/CustomProductTable';

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
  if(clicked.target.innerHTML === 'Users'){
   ReactDOM.render(
     <React.StrictMode>
        <App/>
        <CustomUserTable/>
     </React.StrictMode> 
   ,document.getElementById('root'));
  }
  else if(clicked.target.innerHTML === 'Orders'){
    ReactDOM.render(
    <React.StrictMode>
    <App/>
    <CustomOrderTable/>
    </React.StrictMode>,document.getElementById('root'));
  }
  else{
    ReactDOM.render(
      <React.StrictMode>
        <App/>
        <CustomProductTable/>
      </React.StrictMode>,document.getElementById('root')
    );
  }
}

export default App;
