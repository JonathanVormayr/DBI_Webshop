import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import CustomProductTable from '../Table/CustomProductTable';
import CustomUserTable from '../Table/CustomUserTable.js';
class EditUserComponet extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           user: ""
        }
    }

    componentDidMount(){
        console.log(this.props.userid);
        axios.get(`http://localhost:8080/users/${this.props.userid}`)
            .then(response =>  {
                console.log(response.data);
                this.setState({user: response.data});
            });
    }

    render(){
        return <div className="container2">
            <h1>Edit User</h1>
            <input type="Text" placeholder={this.state.user.firstname} id="firstname"></input>
            <input type="Text" placeholder= {this.state.user.lastname} id="lastname"></input>
            <input type="Text" placeholder={this.state.user.email} id="email"></input>
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
                <CustomUserTable/>
            </React.StrictMode>,document.getElementById('root')
        );
    }

    confirm=() => {
        const firstName = document.getElementById('firstname').value;
        const lastName = document.getElementById('lastname').value;
        const eMail = document.getElementById('email').value;
        const payload = {firstname: firstName,lastname: lastName,email: eMail};
        axios.put(`http://localhost:8080/users/${this.props.userid}`,payload)
            .then(response => {
                console.log(response.data);
                ReactDOM.render(
                    <React.StrictMode>
                        <App/>
                        <CustomUserTable/>
                    </React.StrictMode>,document.getElementById('root')
                );
            });
        };
}

export default EditUserComponet;