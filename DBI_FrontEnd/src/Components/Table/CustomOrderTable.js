import React from 'react';
class CustomOrderTable extends React.Component{
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
                    {this.insertTestData()}
                </table>
            </div>
    }

    insertTestData(data){
        return <tr>
            <td>1</td>
            <td>28.10.2002</td>
            <td>testUser</td>
            <td>120€</td>
            <td><button onClick={this.onClickEdit}>Edit</button></td>
            <td><button>X</button></td>
        </tr> 
    }

     onClickEdit(data){
        console.log(data);
    }
}

export default CustomOrderTable;