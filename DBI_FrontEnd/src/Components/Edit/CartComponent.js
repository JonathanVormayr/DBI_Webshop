import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from '../../App.js';
import CustomUserTable from '../Table/CustomUserTable';
class CartComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/users/${this.props.userid}/cart`)
            .then(response => {
                console.log(response);
                this.setState({products: response.data});
            });
    }
    
    render(){
        return <div className="container2">
        <h1>Cart of UserID {this.props.userid}</h1>
        <table>
            <thead>
            <th>ID</th>
            <th>productName</th>
             <th>Price</th>
             <th>Delete</th>
        </thead>
       <tbody>
           {this.state.products.map(element => {
               return <tr>
                   <td>{element.id}</td>
                   <td>{element.productName}</td>
                   <td>{element.productPrice}</td>
                   <td><button id={element.id} onClick={this.delete}>X</button></td>
               </tr>
             console.log(element);  
           })}
       </tbody>
        </table>
        </div>
    }

    delete = (event) =>{
        const id = event.target.id;
        axios.delete(`http://localhost:8080/users/${this.props.userid}/cart/${id}`)
            .then(response => {
                console.log(response.data);
                ReactDOM.render(
                    <React.StrictMode>
                        <App/>
                        <CartComponent userid={this.props.userid}/>
                    </React.StrictMode>,document.getElementById('root')
                )
            });
    }

    componentDidUpdate(){
        this.componentDidMount();
    }
}

export default CartComponent;