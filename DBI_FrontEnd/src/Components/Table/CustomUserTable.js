import React from 'react';
import axios from 'axios';

class CustomUserTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        console.log('entered mount');
        axios.get('http://localhost:8080/users')
        .then(response => {
            this.setState({products: response.data})
        });
    }

    render(){
             return <div className="container2">
             <h1>Users</h1>
             <table>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>E-Mail</th>
            <th>Cart</th>
            <th>Orders</th>
            <th>Edit</th>
            <th>Delete</th>
            <tbody>
            {this.state.products.map(product => {
                <tr key={product.id}>
                    <td>{product.id}</td>
                </tr>
            })} 
            </tbody>
             </table>
             <button className="addButton">+</button>
             </div>
    }

    insertTestData(data){
        return <tr>
            <td>data.id</td>
            <td>data.firstname</td>
            <td>data.lastname</td>
            <td>data.email</td>
            <td><button>Cart</button></td>
            <td><button>Orders</button></td>
            <td><button>Edit</button></td>
            <td><button>X</button></td>
        </tr>;

    }    

   
}

export default CustomUserTable;