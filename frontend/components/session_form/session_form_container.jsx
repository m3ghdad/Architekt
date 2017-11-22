import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

// const mapStateToProps = ({state, ownProps}) => ({
//   state.loggedIn:
// })


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);




// import {connect} from "react-redux";
// import {login, logout, signup} from "../../actions/session_actions";
// import SessionForm from './session_form';
//
// const mapStateToProps = (state, ownProps) => {
//   let formType = ownProps.match.path==="/login"? "login" : "signup" ;
//   return {
//     loggedIn: Boolean(state.session.currentUser),
//     errors: state.errors.session,
//     formType: formType
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   let action = ownProps.match.path==="/login"? login : signup ;
//   return {
//     formSubmit: (user) => dispatch(action(user))
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
