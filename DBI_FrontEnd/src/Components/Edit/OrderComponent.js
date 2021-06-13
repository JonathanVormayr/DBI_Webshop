import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from '../../App.js';
import CustomUserTable from '../Table/CustomUserTable.js';
class OrderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/users/${this.props.userid}/orders`)
            .then(response => {
                console.log(response);
                this.setState({orders: response.data});
            });
    }
    
    render(){
        return <div className="container2">
        <h1>Orders of UserID {this.props.userid}</h1>
        <table>
            <thead>
            <th>ID</th>
            <th>orderDate</th>
             <th>userName</th>
             <th>Delete</th>
        </thead>
       <tbody>
           {this.state.orders.map(element => {
               return <tr>
                   <td>{element.id}</td>
                   <td>{element.orderDate}</td>
                   <td>{element.username}</td>
                   <td><button id={element.id} onClick={this.delete}>X</button></td>
               </tr>
           })}
       </tbody>
        </table>
        </div>
    }

    delete = (event) =>{
        const id = event.target.id;
        axios.delete(`http://localhost:8080/users/${this.props.userid}/orders/${id}`)
            .then(response => {
                console.log(response.data);
                ReactDOM.render(
                    <React.StrictMode>
                        <App/>
                        <OrderComponent userid={this.props.userid}/>
                    </React.StrictMode>,document.getElementById('root')
                );
            });
    }

    componentDidUpdate(){
        this.componentDidMount();
    }

}

export default OrderComponent;