import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App.js';
import axious from 'axios';
import CustomUserTable from '../Table/CustomUserTable';
class AddUserComponent extends React.Component{
    
    render(){
        return <div className="container2">
            <h1>Add User</h1>
            <input type="Text" placeholder="Vorname:" id="firstname"></input>
            <input type="Text" placeholder="Nachname:" id="lastname"></input>
            <input type="Text" placeholder="Email:" id="email"></input>
            <div className="flexContainer">
            <button className="flexButton" onClick={this.cancel}>Abbrechen</button>
            <button className="flexButton" onClick={this.confirm}>Bestätigen</button>
            </div>
            </div>
    }

    cancel = (event) =>{
      this.exitSite();
    }

    confirm = (event) =>{
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const payload = {firstname: firstname,lastname: lastname, email:email};
        axious.post(`http://localhost:8080/users`,payload)
            .then(response => {
                console.log(response.data);
                this.exitSite();
            });
    }

    exitSite = () =>{
        ReactDOM.render(
            <React.StrictMode>
                <App/>
                <CustomUserTable/>
            </React.StrictMode>,document.getElementById('root')
        );
    }
}

export default AddUserComponent;