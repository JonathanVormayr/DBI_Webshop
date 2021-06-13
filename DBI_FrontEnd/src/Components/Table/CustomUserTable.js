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
        console.log('render called');
            return <div className="container2">
            <h1>Users</h1>
            <table>
                <thead>
                <th>ID</th>
           <th>Firstname</th>
           <th>Lastname</th>
           <th>E-Mail</th>
           <th>Cart</th>
           <th>Orders</th>
           <th>Edit</th>
           <th>Delete</th>
                </thead>
           <tbody>
               {this.state.products.map(element => {
                   return <tr>
                       <td>{element.id}</td>
                       <td>{element.firstname}</td>
                       <td>{element.lastname}</td>
                       <td>{element.email}</td>
                       <td><button>Cart</button></td>
                       <td><button>Orders</button></td>
                       <td><button>Edit</button></td>
                       <td><button>X</button></td>
                   </tr>
                 console.log(element);  
               })}
           </tbody>
            </table>
            <button className="addButton">+</button>
            </div>
        }  
    }

export default CustomUserTable;