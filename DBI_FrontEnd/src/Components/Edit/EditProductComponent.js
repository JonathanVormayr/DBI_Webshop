import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import CustomProductTable from '../Table/CustomProductTable';
class AddProductComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           product: ""
        }
    }

    componentDidMount(){
        console.log(this.props.userid);
        axios.get(`http://localhost:8080/products/${this.props.userid}`)
            .then(response =>  {
                console.log(response.data);
                this.setState({product: response.data});
            });
    }

    render(){
        return <div className="container2">
            <h1>Edit Product</h1>
           {console.log(this.state.product.productName)}
            <input type="Text" placeholder={this.state.product.productName} id="productName"></input>
            <input type="Number" placeholder={this.state.product.productPrice} id="productPrice"></input>
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
                <CustomProductTable/>
            </React.StrictMode>,document.getElementById('root')
        );
    }

    confirm=() => {
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const payload = {productName: productName,productPrice: productPrice};
        axios.put(`http://localhost:8080/products/${this.props.userid}`,payload)
            .then(response => {
                console.log(response.data);
                ReactDOM.render(
                    <React.StrictMode>
                        <App/>
                        <CustomProductTable/>
                    </React.StrictMode>,document.getElementById('root')
                );
            });
        };
}

export default AddProductComponent;