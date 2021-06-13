import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import CustomProductTable from '../Table/CustomProductTable';
import CustomOrderTable from '../Table/CustomOrderTable.js';
class EditOrderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           order: ""
        }
    }

    componentDidMount(){
        console.log(this.props.orderid);
        axios.get(`http://localhost:8080/orders/${this.props.userid}`)
            .then(response =>  {
                console.log(response.data);
                this.setState({order: response.data});
            });
    }

    render(){
        return <div className="container2">
            <h1>Edit Order</h1>
           {console.log(this.state.order.orderDate)}
            <input type="Text" placeholder={this.state.order.orderDate} id="orderDate"></input>
            <input type="Text" placeholder={this.state.order.username} id="username"></input>
            <div className="flexContainer">
            <button className="flexButton" onClick={this.cancel}>Abbrechen</button>
            <button className="flexButton" onClick={this.confirm}>Bestätigen</button>
            </div>
            </div>
    }


    cancel(event){
        ReactDOM.render(
            <React.StrictMode>
                <App/>
                <CustomOrderTable/>
            </React.StrictMode>,document.getElementById('root')
        );
    }

    confirm=() => {
        const orderDate = document.getElementById('orderDate').value;
        const username = document.getElementById('username').value;
        const payload = {orderDate: orderDate,username: username};
        axios.put(`http://localhost:8080/orders/${this.props.userid}`,payload)
            .then(response => {
                console.log(response.data);
                ReactDOM.render(
                    <React.StrictMode>
                        <App/>
                        <CustomOrderTable/>
                    </React.StrictMode>,document.getElementById('root')
                );
            });
        };
}

export default EditOrderComponent;