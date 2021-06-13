import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from '../../App';
import AddUserComponent from '../Add/AddUserComponent';
import EditUserComponet from '../Edit/EditUserComponent';
import CartComponent from '../Edit/CartComponent';
import OrderComponent from '../Edit/OrderComponent';

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
            console.log(response.data);
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
               {console.log(this.state.products)};
               {this.state.products.map(element => {
                   return <tr>
                       <td>{element.id}</td>
                       <td>{element.firstname}</td>
                       <td>{element.lastname}</td>
                       <td>{element.email}</td>
                       <td><button onClick={this.cartOfUser} className={element.id}>Cart</button></td>
                       <td><button onClick={this.ordersOfUser} className={element.id}>Orders</button></td>
                       <td><button onClick={this.editUser} className={element.id}>Edit</button></td>
                       <td><button id={element.id} onClick={this.delete}>X</button></td>
                   </tr>
               })}
           </tbody>
            </table>
            <button className="addButton" onClick={this.addUser}>+</button>
            </div>
        }
        
        async delete(event){
            var id = event.target.id;
           const response = await axios.delete(`http://localhost:8080/users/${id}`);
           console.log(response.data);  
           axios.get('http://localhost:8080/users')
           .then(response => {
               console.dir(response.data);
           });
        }

        addUser = () =>{
            ReactDOM.render(
                <React.StrictMode>
                    <App/>
                    <AddUserComponent/>
                </React.StrictMode>,document.getElementById('root')
            )
        }

        editUser = (event) =>{
            const id = event.target.className;
            console.log(id);
            ReactDOM.render(
                <React.StrictMode>
                    <App/>
                    <EditUserComponet userid={id}/>
                </React.StrictMode>,document.getElementById('root')
            );
        }

        cartOfUser = (event) =>{
            const id = event.target.className;
            ReactDOM.render(
                <React.StrictMode>
                    <App/>
                    <CartComponent userid={id}/>
                </React.StrictMode>,document.getElementById('root')
            );
        }

        ordersOfUser = (event) =>{
            const id = event.target.className;
            ReactDOM.render(
                <React.StrictMode>
                    <App/>
                    <OrderComponent userid={id}/>
                </React.StrictMode>,document.getElementById('root')
            );
        }

    }

export default CustomUserTable;