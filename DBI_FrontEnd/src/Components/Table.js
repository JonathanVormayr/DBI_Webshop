import React from 'react';
import '../index.css';
class CustomTable extends React.Component{
    render(){
        var header = this.props.header;
        var thArray = [];
        header = header.split(',');
        header.forEach(element => {
            thArray.push(<th>{element}</th>);
        });
        var table = <div className="container2">
            <h2>{this.props.headerName}</h2>
        <table>
            {thArray}
        </table>
            </div>
        return table;
    }

    insertTestData(data){
        return <tr>
            <td>1</td>
            <td>Jonny</td>
            <td>Joestar</td>
            <td>Jonny.Joestar@email.com</td>
            <td><button>Cart</button></td>
            <td><button>Orders</button></td>
            <td><button>Edit</button></td>
            <td><button>X</button></td>
        </tr> 
    }
}

export default CustomTable;