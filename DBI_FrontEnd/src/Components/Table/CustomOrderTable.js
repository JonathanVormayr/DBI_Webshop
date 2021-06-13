import React from 'react';
import axios from 'axios';
class CustomOrderTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        console.log('entered mount');
        axios.get('http://localhost:8080/orders')
        .then(response => {
            this.setState({products: response.data})
        });
    }
    render(){
        return <div className="container2">
                <h1>Orders</h1>
                <table>
                    <th>ID</th>
                    <th>OrderDate</th>
                    <th>UserName</th>
                    <th>FullPrice</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <tbody>
                    {this.state.products.map(element => {
                      return <tr>
                       <td>{element.id}</td>
                       <td>{element.orderDate}</td>
                       <td>{element.username}</td>
                       <td>{this.calcPrice(element.orderProducts)}€</td>
                       <td><button>Add</button></td>
                       <td><button>Edit</button></td>
                       <td><button>X</button></td>
                   </tr>
               })}
           </tbody>
                </table>
            </div>
    }

    calcPrice(data){
        var price = 0;
        data.forEach(element => {
            price += element;
        });
        return price;
    }
}

export default CustomOrderTable;