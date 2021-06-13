import React from 'react';
import axios from 'axios';
import App from '../../App.js';
import ReactDOM from 'react-dom';
import EditOrderComponent from '../Edit/EditOrderComponent';
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
                       <td><button onClick={this.edit} className={element.id}>Edit</button></td>
                       <td><button onClick={this.delete} id={element.id}>X</button></td>
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

    async delete(event){
        var id = event.target.id;
       const response = await axios.delete(`http://localhost:8080/orders/${id}`);
       console.log(response.data);  
    }

    componentDidUpdate(pP,pS,sS){
        this.componentDidMount();
    }

    edit = (event) =>{
        var id = event.target.className;
        console.log(id);
        ReactDOM.render(
            <React.StrictMode>
                <App/>
                <EditOrderComponent/>
            </React.StrictMode>,document.getElementById('root')
          );
    }
}
    
export default CustomOrderTable;