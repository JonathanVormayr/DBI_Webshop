import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import axios from 'axios';
import AddProductComponent from '../Add/AddProductComponent';
class CustomProductTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        console.log('entered mount');
        axios.get('http://localhost:8080/products')
        .then(response => {
            this.setState({products: response.data})
        });
    }
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
                    <tbody>
                    {this.state.products.map(element => {
                      return <tr>
                       <td>{element.id}</td>
                       <td>{element.productName}</td>
                       <td>{element.productPrice}€</td>
                       <td>{element.creationdate}</td>
                       <td><button>Add</button></td>
                       <td><button>Edit</button></td>
                       <td><button>X</button></td>
                   </tr>
               })}
           </tbody>
                </table>
                <button className="addButton" onClick={this.addClick}>+</button>
            </div>
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