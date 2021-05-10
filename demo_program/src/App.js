import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div className="App">
    <h1>Hello World!</h1>
    <span className="test_format">Unser erstes React-Frontend!</span>
    <br/><br/><button onClick={testOnClick}>testButton</button>
    </div>
   
      );

      function testOnClick(){
        console.log('button testButton clicked!');
      }
}

export default App;
