import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
      console.log(this.state);
    };
  }

  handleModal(e){
    e.preventDefault();

  }

  render(){
    let buttonText = this.props.formType==="login"? "Sign In" : "Sign Up";
    return (
      <div className="modal is-open">
        <form onSubmit={this.handleSubmit} className="modal-form">

          <span className="modal-close js-modal-close">&times;</span>

          <h1>Welcome</h1>
          <br/>

          <div className="input">

            <label htmlFor="form-email">Email</label>
            <input
              placeholder="Email"
              type="text" id="form-email"
              onChange={this.handleChange('email')}
              value={this.state.email}/>
          </div>

          <div className="input">
            <label htmlFor="form-password">Password</label>
            <input
              type="password"
              id="form-password"
              onChange={this.handleChange('password')}
              value={this.state.password}/>
          </div>

          <div>
            <input type="submit" className="submit" value={buttonText}/>
          </div>
        </form>
        <div className="modal-screen js-modal-close"></div>
      </div>
    );

  }
}

export default withRouter(SessionForm);
