import React from 'react';
import ReactDOM from 'react-dom';
import axious from 'axios';
import App from '../../App.js'
import CustomProductTable from '../Table/CustomProductTable.js';

class AddProductComponent extends React.Component{

    render(){
        return <div className="container2">
            <h1>Add Product</h1>
            <input type="Text" placeholder="Produktname:" id="productname"/>
            <input type="Number" placeholder="Produktpreis (in Euro):" id="productprice"/>
            <div className="flexContainer">
            <button className="flexButton" onClick={this.cancel}>Abbrechen</button>
            <button className="flexButton" onClick={this.confirm}>Bestätigen</button>
            </div>
        </div>
    }

    cancel = () =>{
       this.exitSite();
    }

    confirm = () =>{
        const productName = document.getElementById('productname').value;
        const productPrice = document.getElementById('productprice').value;
        const payload = {productName: productName,productPrice: productPrice};
        axious.post('http://localhost:8080/products',payload)
            .then(response => {
                console.log(response.data);
                this.exitSite();
            });
    }

    exitSite = () => {
        ReactDOM.render(
            <React.StrictMode>
                <App/>
                <CustomProductTable/>
            </React.StrictMode>,document.getElementById('root')
        );
    }
}

export default AddProductComponent;