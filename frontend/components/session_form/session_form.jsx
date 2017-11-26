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

  render(){
    let text = this.props.formType==="login"? "Sign in" : "Sign up";
    let buttonText = this.props.formType==="login"? "Sign In" : "Sign Up";
    return (
      <div className="modal">
        <div className="modal-screen"></div>

        <div className="modal-form">
        <Link className="x-button" to="/">X</Link>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="">
            <input className="text-form" type="text" placeholder="Email" onChange={this.handleChange('email')} value={this.state.email}/>
          </label>
          <br/>
          <label htmlFor="">
            <input className="text-form" type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>
          <br/>
          <input type="submit" className="submit-button" value={buttonText}/>
        </form>
        </div>
      </div>
    );

  }
}

export default withRouter(SessionForm);

// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
//
// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.loggedIn) {
//       this.props.history.push('/');
//     }
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = this.state;
//     this.props.processForm({user});
//   }
//
//   navLink() {
//     if (this.props.formType === 'login') {
//       return <Link to="/signup">sign up instead</Link>;
//     } else {
//       return <Link to="/login">log in instead</Link>;
//     }
//   }
//
//   // renderErrors() {
//   //   return(
//   //     <ul>
//   //       {this.props.errors.map((error, i) => (
//   //         <li key={`error-${i}`}>
//   //           {error}
//   //         </li>
//   //       ))}
//   //     </ul>
//   //   );
//   // }
//
//   render() {
//
//     let errors;
//     if (this.props.errors.session !== []) {
//       errors = this.props.errors.session;
//     }
//     return (
//       <div className="login-form-container">
//         <form onSubmit={this.handleSubmit} className="login-form-box">
//           Welcome to Architekt!
//           <br/>
//           Please {this.props.formType} or {this.navLink()}
//           {this.errors}
//           <div className="login-form">
//             <br/>
//             <label>Email:
//               <input type="text"
//                 value={this.state.email}
//                 onChange={this.update('email')}
//                 className="login-input"
//               />
//             </label>
//             <br/>
//             <label>Password:
//               <input type="password"
//                 value={this.state.password}
//                 onChange={this.update('password')}
//                 className="login-input"
//               />
//             </label>
//             <br/>
//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default withRouter(SessionForm);
