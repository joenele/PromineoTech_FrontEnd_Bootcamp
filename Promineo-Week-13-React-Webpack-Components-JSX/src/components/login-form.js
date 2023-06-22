import React from 'react';
 
export default class LoginForm extends React.Component {
    render() {
        return(
            <form className="border">
                <h3>Log In</h3>
                Username: <input/>
                <br/><br/>
                Password: <input/>
                <br/><br/>
                <input className="btn btn-success" type="submit"/>
            </form>
        )
    }
}