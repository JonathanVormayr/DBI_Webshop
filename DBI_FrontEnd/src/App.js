import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <div className="container">
            <img src="./logo_final.png" className="logo"></img>
            <nav>
              <ul className="nav">
                <li>Orders</li>
                <li id="selected">Users</li>
                <li>ProductList</li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container2">
          <h2>User List</h2>
        </div>
        <div className="tableDiv">
        <table>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>E-Mail</th>
            <th>Cart</th>
            <th>Orders</th>
            <th>Edit</th>
            <tr>
              <td>1</td>
              <td>Jonny</td>
              <td>Joestar</td>
              <td>Jonny.Joestar@email.com</td>
              <td><button>Cart</button></td>
              <td><button>Orders</button></td>
              <td><button>Edit</button></td>
              <td><button className="roundButton">X</button></td>
            </tr>
          </table>
        </div>
    </div>
  );
}

function TestApp(){
  return (
    <div>
      <h1>lol</h1>
    </div>
  );
}

export default App;
