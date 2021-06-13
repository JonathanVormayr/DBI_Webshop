import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import axios from 'axios';
import EditProductComponent from '../Edit/EditProductComponent';
import CustomUserTable from './CustomUserTable';
import AddProductComponent from '../Add/AddProductComponent';
class CustomProductTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products:[],
            selectedProductId: -1
        }
    }

    componentDidMount(){
        console.log('entered mount');
        axios.get('http://localhost:8080/products')
        .then(response => {
            this.setState({products: response.data})
        });
    }
    render(){
        return <div className="container2">
             <h1>Products</h1>
                <table>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <tbody>
                    {this.state.products.map(element => {
                      return <tr key={element.id}>
                       <td>{element.id}</td>
                       <td>{element.productName}</td>
                       <td>{element.productPrice}€</td>
                       <td><button onClick={this.edit} className={element.id}>Edit</button></td>
                       <td><button onClick={this.delete} id={element.id}>X</button></td>
                   </tr>
               })}
           </tbody>
                </table>
                <button className="addButton" onClick={this.addClick}>+</button>
            </div>
    }


    async delete(event){
        var id = event.target.id;
        
       const response = await axios.delete(`http://localhost:8080/products/${id}`);
       console.log(response.data);  
       axios.get('http://localhost:8080/products')
       .then(response => {
           console.dir(response.data);
       });
    }

    edit(event){
       var id = event.target.className;
       console.log(id);
       ReactDOM.render(
        <React.StrictMode>
            <App/>
            <EditProductComponent userid={id}/>
        </React.StrictMode>,document.getElementById('root')
      );
    }

    addClick = () =>{
        ReactDOM.render(
        <React.StrictMode>
        <App/>
        <AddProductComponent/>
    </React.StrictMode>,document.getElementById('root')
        );
    }

    componentDidUpdate(pP,pS,sS){
        this.componentDidMount();
    }

}
export default CustomProductTable;