import { connect } from 'react-redux';
import UserForm from '../components/User/UserForm';
import { sessionSignup } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Signup'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignup(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
