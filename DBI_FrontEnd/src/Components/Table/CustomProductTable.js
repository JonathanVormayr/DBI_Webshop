import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import AddProductComponent from '../Add/AddProductComponent';
class CustomProductTable extends React.Component{
    render(){
        return <div className="container2">
             <h1>Products</h1>
                <table>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>CreationDate</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    {this.insertTestData()}
                </table>
                <button className="addButton" onClick={this.addClick}>+</button>
            </div>
    }

    insertTestData(data){
        return <tr>
            <td>1</td>
            <td>Bad Dragon</td>
            <td>120€</td>
            <td>17.05.2021</td>
            <td><button>Add</button></td>
            <td><button onClick={this.onClickEdit}>Edit</button></td>
            <td><button>X</button></td>
        </tr> 
    }

     addClick(data){
      ReactDOM.render(
        <React.StrictMode>
            <App/>
            <AddProductComponent/>
        </React.StrictMode>,document.getElementById('root')
      );
    }
}

export default CustomProductTable;